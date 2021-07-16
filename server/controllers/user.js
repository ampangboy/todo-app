const { User, createUser, getAllUser } = require('../models/user');

exports.userLogin = async (req, res) => {
  const user = new User(req.body.id, req.body.username);

  const users = await getAllUser();

  const userExist = users.filter(
    (u) => user.id === u.id && user.username === u.name
  );

  res.cookie('user_id', user.id);
  res.cookie('username', user.username);

  if (userExist.length === 0) {
    await createUser(user);
    res.sendStatus(201);
  } else {
    res.sendStatus(200);
  }
};
