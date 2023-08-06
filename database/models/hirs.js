const conn = require('../index.js');

module.exports = {
    getAll: function (callback) {
      const sql = `SELECT * FROM hirs`;
      conn.query(sql, function (error, results) {
        if (error) {
          console.error('Error fetching hirs:', error);
          callback(error, null);
        } else {
          callback(null, results);
        }
      });
    },
  
    add: function (hir, callback) {
      const sql = `INSERT INTO hirs ( HR_fname,  HR_position, FB ) VALUES (?, ?,?)`;
      conn.query(sql, [hir.HR_fname, hir.HR_position, hir.FB], function (error, results) {
        if (error) {
          console.error('Error adding hir:', error);
          callback(error, null);
        } else {
          console.log('hir added successfully:', results);
          callback(null, results);
        }
      });
    },
    
  };
