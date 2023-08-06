// routes/cohorts.js

const express = require('express');
const hirsController = require('../controllers/hirs');

const router = express.Router();

router.get('/hirs', hirsController.getAllHirs);
router.get('/hirs', hirsController.addHir);

module.exports = router;
