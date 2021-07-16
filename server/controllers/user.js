const {
  User,
  createUser: createUserModel,
  getAllUser: getAllUserModel,
} = require('../models/user');

exports.userLogin = async (req, res) => {
  const user = new User(req.body.id, req.body.username);

  const users = await getAllUserModel();

  const userExist = users.filter(
    (u) => user.id === u.id && user.username === u.name
  );

  res.cookie('userId', user.id);
  res.cookie('username', user.username);

  if (userExist.length === 0) {
    await createUserModel(user);
    res.sendStatus(201);
  } else {
    res.sendStatus(200);
  }
};
