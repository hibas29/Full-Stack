const dbconfig = require('../dbconfig');
const {DataTypes} = require('sequelize');

const user = dbconfig.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
});

module.exports = user;
