const express = require('express');
const studentsController = require('../controllers/students');

const router = express.Router();

router.get('/students', studentsController.getAllStudents);
router.get('/students', studentsController.addStudent);

module.exports = router;
