const User = require('../models/user');

exports.userLogin = async (req, res) => {
  User.id = req.body.id;
  User.username = req.body.username;
  const users = await User.getAll();

  const userExist = users.filter(
    (user) => User.id === user.id && User.username === user.name
  );

  res.cookie('user_id', User.id);
  res.cookie('username', User.username);

  if (userExist.length === 0) {
    await User.createUser(User);
    res.sendStatus(201);
  } else {
    res.sendStatus(200);
  }
};
