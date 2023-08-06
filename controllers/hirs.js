const { hirs } = require('../database/models/index.js');

module.exports = {
    getAllHirs: function (req, res) {
        hirs.getAll(function (err, results) {
          if (err) {
            console.error('Error fetching hirs:', err);
            res.status(500).json({ error: 'Failed to load resource' });
          } else {
            res.json(results);
          }
        });
      },

      addHir: function (req, res) {
       const hir = {
         HR_fname: req.body.HR_fname,
         HR_position: req.body.HR_position,
         FB: req.body.FB
       };
     
       console.log('hir Object:', hir);
     
       hirs.add(hir, function (err, results) {
         if (err) {
           console.error('Error adding hir:', err);
           res.status(500).json({ error: 'Failed to add hir' });
         } else {
           res.status(201).json(results);
         }
       });
     },

};
