const express = require('express');

const subjectrouter = express.Router();

subjectrouter.get('/get', (req, res) => {
  res.send('Getting subject data');
});

subjectrouter.post('/save', (req, res) => {
  res.send('Saving subject data');
});

module.exports = subjectrouter;
// subject.routes.js