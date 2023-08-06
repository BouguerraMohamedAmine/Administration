const { adminUsers } = require("../controllers/adminUser");

module.exports = {
  getAlladminUsers: function (req, res) {
    adminUsers.getAll(function (err, results) {
      if (err) {
        console.error('Error fetching admin:', err);
        res.status(500).json({ error: 'Failed to load resource' });
      } else {
        res.json(results);
      }
    });
  },

  addadmin: function (req, res) {
    const admin = {
      User: req.body.User,
      email: req.body.email,
      password: req.body.password,
    };

    console.log('admin Object:', admin);

    adminUsers.add(admin, function (err, results) {
      if (err) {
        console.error('Error adding admin:', err);
        res.status(500).json({ error: 'Failed to add admin' });
      } else {
        res.status(201).json(results);
      }
    });
  },
};