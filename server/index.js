const express = require('express');
const cohortsRoutes = require('../routes/cohorts');
const hirsRoutes = require('../routes/hirs')
const studentsRoutes = require ("../routes/student")
const adminRoutes = require ("../routes/adminUser")
const CORS = require("cors")

const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(CORS())

// Routes
app.use('/api', cohortsRoutes);
app.use('/api', hirsRoutes);
app.use('/api', studentsRoutes);
app.use('/api', adminRoute);
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
