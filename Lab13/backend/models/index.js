// models/index.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('studentdb', 'root', 'root123', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test connection
sequelize.authenticate()
  .then(() => console.log('✅ Connected to MySQL'))
  .catch(err => console.error('❌ Connection error:', err));

module.exports = { sequelize, DataTypes };