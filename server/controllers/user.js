const User = require('../models/user');

exports.userLogin = async (req, res) => {
  User.id = req.body.id;
  User.username = req.body.username;
  let users;

  users = await User.getAll();

  let userExist = users.filter(
    (user) => User.id === user.id && User.username === user.name
  );

  if (userExist.length === 0) {
    await User.createUser(User);
    res.cookie('user_id', User.id);
    res.cookie('username', User.username);
    res.sendStatus(201);
  } else {
    res.cookie('user_id', User.id);
    res.cookie('username', User.username);
    res.sendStatus(200);
  }
};
