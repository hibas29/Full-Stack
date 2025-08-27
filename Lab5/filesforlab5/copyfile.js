const fs = require('fs');

const streamin = fs.createReadStream('log.txt', 'utf-8');

const streamout = fs.createWriteStream('log_backup.txt', 'utf-8');


streamin.pipe(streamout);

//total size of the file
const stat = fs.statSync('log.txt');

let fileread = 0;
//percentage of file read
streamin.on('data', (chunk) => {
  fileread += chunk.length;
  const percentage = ((fileread / stat.size) * 100).toFixed(2);
  console.log(`Progress: ${percentage}%`);
});

streamin.on('data', (data) => {
  console.log('progress: ' + data.length);
});

streamin.on('end', () => {
  console.log('File transfer completed');
});

streamin.on('error', () => {
  console.error('An error occurred while reading');
});

streamout.on('error', () => {
  console.error('Error occurred during writing');
});


