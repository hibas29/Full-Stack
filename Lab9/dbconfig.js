const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database: 'text1',
    username: 'root',
    password: 'root123',
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize;