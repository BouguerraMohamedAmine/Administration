// routes/cohorts.js

const express = require('express');
const cohortsController = require('../controllers/cohorts');

const router = express.Router();


router.get('/cohorts', cohortsController.getAllCohorts);
router.post('/cohorts', cohortsController.addCohort);



module.exports = router;
