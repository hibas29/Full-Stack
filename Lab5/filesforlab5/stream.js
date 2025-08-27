//reading the file
const fs = require('fs');

const filesteam = fs.createReadStream('log.txt','utf-8');

let readfiledata = '';

filesteam.on('data', (data) => {
  readfiledata += data;
});

filesteam.on('end', (data) => {
  console.log('File read completed');
})

filesteam.on('error', () => {
  console.error('I LIKE BOOKS');
});

filesteam.on('open', () => {
  console.log('File opened successfully');
})

filesteam.on('close', () => {
  console.log('File closed successfully');
})