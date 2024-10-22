const User = require("../model/User");

//  GET /user
const user = (req, res) => {
  res.render("user");
};

// POST /user/login
const login = (req, res) => {
  console.log(req.body);
  const { userId, userPw } = req.body;

  const userData = User.getUserInfo(); // {realId: ~, realPw: ~}

  if (userData.realId === userId && userData.realPw === userPw) {
    res.json({ isSuccess: true, userInfo: req.body });
  } else {
    res.json({ isSuccess: false });
  }
};

module.exports = { user, login };
