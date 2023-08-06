 const { cohorts } = require('../database/models/index.js');

 module.exports = {
     getAllCohorts: function (req, res) {
         cohorts.getAll(function (err, results) {
           if (err) {
             console.error('Error fetching cohorts:', err);
             res.status(500).json({ error: 'Failed to load resource' });
           } else {
             res.json(results);
           }
         });
       },

       addCohort: function (req, res) {
        const cohort = {
          cname: req.body.cname,
          cphase: req.body.cphase,
        };
      
        console.log('Cohort Object:', cohort);
      
        cohorts.add(cohort, function (err, results) {
          if (err) {
            console.error('Error adding cohort:', err);
            res.status(500).json({ error: 'Failed to add cohort' });
          } else {
            res.status(201).json(results);
          }
        });
      },

 };
