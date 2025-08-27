const express = require('express');

const teacherrouter = express.Router();

teacherrouter.get('/get', (req, res) => {
  res.send('Getting teacher data');
});

teacherrouter.post('/save', (req, res) => {
  res.send('Saving teacher data');
});

module.exports = teacherrouter;
// teacher.routes.js