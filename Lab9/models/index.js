const dbconnect = require('../dbconfig');
const Student = require('./student');
const Subject = require('./subject');
const Associate = require('./associateModel');


Student.hasMany(Subject);
Subject.belongsTo(Student);

(async () => {
    try {
        await dbconnect.authenticate();
        console.log("Connection successfully.");
        await dbconnect.sync();
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

module.exports = {
    Student,
    Subject,
    Associate
};