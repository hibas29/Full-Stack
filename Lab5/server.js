const express = require('express');
const studentrouter = require('./student/routes/student.route');
const teacherrouter = require('./teacher/routes/teacher.route');
const subjectrouter = require('./subject/routes/subject.route');

const app = express();

const PORTNUNBER = 3000;

app.listen(PORTNUNBER, () => {
  console.log(`Server is running on port ${PORTNUNBER}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to main page');
});

app.use('/student', studentrouter);
app.use('/teacher', teacherrouter);
app.use('/subject', subjectrouter);