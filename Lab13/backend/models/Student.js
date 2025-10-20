// models/Student.js
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    className: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rollNo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marks: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Student;
};