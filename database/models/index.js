const cohorts = require('../models/cohorts.js');
const hirs = require('../models/hirs.js')
const students = require('../models/students.js')

const db = {
  cohorts: cohorts,
  hirs: hirs,
  students: students,
  adminUser :adminUser
};

module.exports = db;