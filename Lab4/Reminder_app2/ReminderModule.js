// reminderModule.js
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');
const remindersPath = path.join(__dirname, 'reminders.txt');

class ReminderEmitter extends EventEmitter {}
const reminderEmitter = new ReminderEmitter();
const activeQueue = new Set();

if (!fs.existsSync(remindersPath)) {
  fs.writeFileSync(remindersPath, '');
}

function loadReminders(callback) {
  fs.readFile(remindersPath, 'utf-8', (err, data) => {
    if (err) return callback([]);
    const lines = data.split('\n').filter(Boolean);
    const reminders = lines.map((line, i) => {
      const match = line.match(/Task: (.+) \| Delay: (\d+)s/);
      return match ? { index: i, task: match[1], delaySec: parseInt(match[2], 10) } : null;
    }).filter(Boolean);
    callback(reminders);
  });
}

function saveReminders(reminders, callback) {
  const data = reminders.map(r => `Task: ${r.task} | Delay: ${r.delaySec}s`).join('\n');
  fs.writeFile(remindersPath, data, callback);
}

function triggerReminder({ task, delaySec }) {
  if (activeQueue.has(task)) return;
  activeQueue.add(task);
  console.log(`\nScheduled: "${task}" in ${delaySec}s`);

  let countdown = delaySec;
  const timer = setInterval(() => {
    process.stdout.write(`${task}: ${countdown}s remaining...\r`);
    countdown--;
    if (countdown < 0) {
      clearInterval(timer);
      reminderEmitter.emit('trigger', task);
      activeQueue.delete(task);
    }
  }, 1000);
}

function addReminder(task, delaySec, callback) {
  loadReminders(reminders => {
    const newReminder = { task, delaySec };
    reminders.push(newReminder);
    saveReminders(reminders, () => {
      triggerReminder(newReminder);
      callback();
    });
  });
}

function editReminder(index, newTask, newDelaySec, callback) {
  loadReminders(reminders => {
    const old = reminders[index];
    if (old) {
      reminders[index].task = newTask;
      reminders[index].delaySec = newDelaySec;
      saveReminders(reminders, () => {
        if (activeQueue.has(old.task)) {
          activeQueue.delete(old.task);
        }
        triggerReminder({ task: newTask, delaySec: newDelaySec });
        callback();
      });
    } else {
      callback('Invalid index');
    }
  });
}

function startReminders(callback) {
  loadReminders(reminders => {
    reminders.forEach(r => triggerReminder(r));
    callback();
  });
}

function startOneReminder(reminder, callback) {
  triggerReminder(reminder);
  callback();
}

reminderEmitter.on('trigger', task => {
  console.log(`\nReminder fired: "${task}"\n`);
});

module.exports = {
  addReminder,
  editReminder,
  loadReminders,
  startReminders,
  startOneReminder,
};