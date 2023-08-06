const conn = require('../index.js');

module.exports = {
    getAll: function (callback) {
      const sql = `SELECT * FROM cohort`;
      conn.query(sql, function (error, results) {
        if (error) {
          console.error('Error fetching cohorts:', error);
          callback(error, null);
        } else {
          callback(null, results);
        }
      });
    },
  
    add: function (cohort, callback) {
      const sql = `INSERT INTO cohort (cname, cphase) VALUES (?, ?)`;
      conn.query(sql, [cohort.cname, cohort.cphase], function (error, results) {
        if (error) {
          console.error('Error adding cohort:', error);
          callback(error, null);
        } else {
          console.log('Cohort added successfully:', results);
          callback(null, results);
        }
      });
    },
    
  };
