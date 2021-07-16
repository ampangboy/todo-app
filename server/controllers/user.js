const User = require('../models/user');

exports.userLogin = (req, res) => {
  User.id = req.body.id;
  User.username = req.body.username;

  User.getAll((err, users) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      });

    let userExist = users.filter(
      (user) => User.id === user.id && User.username === user.name
    );

    if (userExist.length === 0) {
      res.send(401);
    } else res.send(200);
  });
};
