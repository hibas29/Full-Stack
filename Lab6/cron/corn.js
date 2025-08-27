const cron = require('node-cron');

let second=0;

cron.schedule('*/1 * * * * *', () => {
  console.log("Cron job running every second" + second++);
});

cron.schedule('4 * * * *', () => {
  console.log("Cron job running ");
});