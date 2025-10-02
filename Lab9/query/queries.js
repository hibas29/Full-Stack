const sequelize = require('../dbconfig');
const model = require('../models');
const {Sequelize} = require('sequelize');
const Student = model.Student;
const Subject = model.Subject;
const Associate = model.Associate;

const getAllStudents = async () => {
    return await Student.findAll();
};

const createStudent = async (studentData) => {
    return await Student.create(studentData);
};

const getAllSubjects = async () => {
    return await Subject.findAll();
};

const createSubject = async (subjectData) => {
    return await Subject.create(subjectData);
};



const innerJoin = async () => {
    try {
        const [results] = await sequelize.query(
            `SELECT students.name AS studentName, subjects.name AS subjectName 
             FROM associates
             INNER JOIN students ON associates.studentId = students.id
             INNER JOIN subjects ON associates.subjectId = subjects.id;`
        );
        return results;
    } catch (err) {
        console.error("Error executing query:", err);
    }
};


const selectSubjectForStudent = async (studentId, subjectId) => {
    return await Associate.create({ studentId, subjectId });
};

module.exports = {
    getAllStudents,
    createStudent,
    getAllSubjects,
    createSubject,
    innerJoin,
    selectSubjectForStudent
};