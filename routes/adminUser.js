// routes/cohorts.js

const express = require('express');
const adminController = require('../controllers/adminUser.js');

const router = express.Router();


router.get('/admin', adminController.getAlladmins);
router.post('/admin', adminController.addadmin);



module.exports = router;
