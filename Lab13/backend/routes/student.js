// routes/student.js
const express = require('express');
const router = express.Router();
const { Student } = require('../models');

router.post('/add', async (req, res) => {
  const { name, class: studentClass, rollNo, subject, marks } = req.body;
  try {
    const student = await Student.create({ name, class: studentClass, rollNo, subject, marks });
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;