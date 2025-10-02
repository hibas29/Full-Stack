const dbconfig = require('../dbconfig');
const { DataTypes } = require('sequelize');

const Student = dbconfig.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    }
});

module.exports = Student;