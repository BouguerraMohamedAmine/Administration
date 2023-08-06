const conn = require('../index.js');

module.exports = {
    getAll: function (callback) {
      const sql = `SELECT * FROM students`;
      conn.query(sql, function (error, results) {
        if (error) {
          console.error('Error fetching students:', error);
          callback(error, null);
        } else {
          callback(null, results);
        }
      });
    },
  
    add: function (student, callback) {
      const sql = `INSERT INTO students (firstName, lastName , sage) VALUES (?, ?,?)`;
      conn.query(sql, [student.firstName, student.lastName , student.sage], function (error, results) {
        if (error) {
          console.error('Error adding student:', error);
          callback(error, null);
        } else {
          console.log('student added successfully:', results);
          callback(null, results);
        }
      });
    },
    
  };
