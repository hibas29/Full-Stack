const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize, DataTypes } = require('./models');
const StudentModel = require('./models/Student')(sequelize, DataTypes);
const studentRoutes = require('./routes/student');

const app = express();

// ✅ CORS configuration that handles preflight
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// ✅ Handle preflight requests explicitly (optional but safe)
app.options('/*', cors());
app.use(bodyParser.json());
app.use('/api/student', studentRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => console.log('🚀 Server running on http://localhost:3001'));
});