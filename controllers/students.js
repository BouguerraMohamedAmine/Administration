const { students } = require('../database/models/index.js');

module.exports = {
    getAllStudents: function (req, res) {
        students.getAll(function (err, results) {
          if (err) {
            console.error('Error fetching students:', err);
            res.status(500).json({ error: 'Failed to load resource' });
          } else {
            res.json(results);
          }
        });
      },

      addStudent: function (req, res) {
       const student = {
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         sage: req.body.sage
       };
     
       console.log('student Object:', student);
     
       students.add(student, function (err, results) {
         if (err) {
           console.error('Error adding student:', err);
           res.status(500).json({ error: 'Failed to add student' });
         } else {
           res.status(201).json(results);
         }
       });
     },

};
