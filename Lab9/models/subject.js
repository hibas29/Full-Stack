const dbconfig = require('../dbconfig');
const { DataTypes } = require('sequelize');

const Subject = dbconfig.define('Subject', {
    name: {
        type: DataTypes.STRING,
        allowNull: false    
    },
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    } 
});

module.exports = Subject;