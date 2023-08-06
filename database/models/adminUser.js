const conn = require('../index.js');

module.exports = {
    getAll: function (callback) {
      const sql = `SELECT * FROM administration`;
      conn.query(sql, function (error, results) {
        if (error) {
          console.error('Error fetching administration:', error);
          callback(error, null);
        } else {
          callback(null, results);
        }
      });
    },
  
    add: function (administration, callback) {
      const sql = `INSERT INTO administration (User, email , password) VALUES (?, ? , ?)`;
      conn.query(sql, [administration.User,administration.Email , administration.password], function (error, results) {
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
