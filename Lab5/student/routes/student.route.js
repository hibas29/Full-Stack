const express = require('express');

const studentrouter = express.Router();

studentrouter.get('/get', (req, res) => {
  res.send('Getting student data');
});

studentrouter.post('/save', (req, res) => {
  res.send('Saving student data');
});

module.exports = studentrouter;
// student.routes.js