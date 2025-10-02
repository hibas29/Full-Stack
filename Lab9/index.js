const express = require('express');
const queries = require('./query/queries');

const app = express();
app.use(express.json());


app.post("/selectSubjectForStudent", async (req, res) => {
    const { studentId, subjectId } = req.body;
    const association = await queries.selectSubjectForStudent(studentId, subjectId);
    res.status(201).send(association);
});

app.get("/InnerJoin", async (req, res) => {
    const results = await queries.innerJoin();
    res.send(results);
});

app.get("/student", async (req, res) => {
    const students = await queries.getAllStudents();
    res.send(students);
});

app.post("/createStudent", async (req, res) => {
    const newStudent = await queries.createStudent(req.body);
    res.status(201).send(newStudent);
});

app.get("/subject", async (req, res) => {
    const subjects = await queries.getAllSubjects();
    res.send(subjects);
});

app.post("/createSubject", async (req, res) => {
    const newSubject = await queries.createSubject(req.body);
    res.status(201).send(newSubject);
});



app.listen(3000, () => {
    console.log("Server is running on 3000");
});