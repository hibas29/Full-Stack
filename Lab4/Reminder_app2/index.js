// index.js
const readline = require('readline');
const {
  addReminder,
  editReminder,
  loadReminders,
  startReminders,
  startOneReminder
} = require('./ReminderModule');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(q, cb) {
  rl.question(q, cb);
}

function mainMenu() {
  console.log('\nReminder CLI');
  console.log('1️  Add Reminder');
  console.log('2️  View Reminders');
  console.log('3️  Edit Reminder');
  console.log('4️ Start All Reminders');
  console.log('5️  Start Specific Reminder');
  console.log('6️  Exit');

  ask(' Choose (1-6): ', choice => {
    switch (choice.trim()) {
      case '1': return addFlow();
      case '2': return viewFlow();
      case '3': return editFlow();
      case '4': return startReminders(() => mainMenu());
      case '5': return startOneFlow();
      case '6': console.log('\n See ya loveliessss<3'); rl.close(); break;
      default: console.log('Invalid. Try again.'); mainMenu();
    }
  });
}

function addFlow() {
  ask('\n Task name: ', task => {
    if (!task.trim()) return console.log(' Empty name.') || mainMenu();
    ask(' Delay in seconds: ', delayStr => {
      const delaySec = parseInt(delayStr, 10);
      if (isNaN(delaySec) || delaySec < 0) return console.log('Invalid time.') || mainMenu();
      addReminder(task.trim(), delaySec, () => {
        console.log(' Reminder added!');
        mainMenu();
      });
    });
  });
}

function viewFlow() {
  loadReminders(reminders => {
    console.log('\n Reminders:');
    if (!reminders.length) console.log('None yet.');
    else reminders.forEach((r, i) => {
      console.log(`${i + 1}. ${r.task} (${r.delaySec}s)`);
    });
    mainMenu();
  });
}

function editFlow() {
  loadReminders(reminders => {
    if (!reminders.length) return console.log('\nNo tasks.') || mainMenu();
    reminders.forEach((r, i) => console.log(`${i + 1}. ${r.task} (${r.delaySec}s)`));
    ask(' Number to edit: ', numStr => {
      const i = parseInt(numStr, 10) - 1;
      if (isNaN(i) || i < 0 || i >= reminders.length) return console.log(' Invalid.') || mainMenu();
      ask('New name: ', name => {
        ask('New delay (s): ', dStr => {
          const d = parseInt(dStr, 10);
          if (!name.trim() || isNaN(d) || d < 0) return console.log('Invalid.') || mainMenu();
          editReminder(i, name.trim(), d, () => {
            console.log('Reminder updated & scheduled!');
            mainMenu();
          });
        });
      });
    });
  });
}

function startOneFlow() {
  loadReminders(reminders => {
    if (!reminders.length) return console.log('\nNothing to start.') || mainMenu();
    reminders.forEach((r, i) => console.log(`${i + 1}. ${r.task} (${r.delaySec}s)`));
    ask('Start task #: ', numStr => {
      const i = parseInt(numStr, 10) - 1;
      if (isNaN(i) || i < 0 || i >= reminders.length) return console.log('Invalid.') || mainMenu();
      startOneReminder(reminders[i], () => {
        console.log('Reminder triggered.');
        mainMenu();
      });
    });
  });
}

mainMenu();