const dbconfig = require('../dbconfig');
const { DataTypes } = require('sequelize');

const Associate = dbconfig.define('Associate', {
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    }
});

module.exports = Associate;