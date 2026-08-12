const express = require('express');
const achievementRoutes = require('./routes/achievements.routes');

const app = express();

app.use(express.json());
app.use('/api', achievementRoutes);

module.exports = app;
