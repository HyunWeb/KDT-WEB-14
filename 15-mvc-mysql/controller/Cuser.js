const User = require("../model/UserData");

const get_signup = async (req, res) => {
  res.render("signup");
};

const get_signin = (req, res) => {
  res.render("signin");
};

const get_profile = async (req, res) => {
  console.log("get_profile", req.params);

  res.render("profile");
};

const post_signup = async (req, res) => {
  const result = await User.overlapText(req.body);

  if (!result.length) {
    await User.signUp(req.body);
    res.json({ result: true });
  } else {
    res.json({ result: false });
  }
};

const post_signin = async (req, res) => {
  const data = await User.signIn(req.body);
  if (data.length) {
    res.json({
      result: true,
      name: data[0].name,
      userid: data[0].userid,
      pw: data[0].pw,
    });
  } else {
    res.json({ result: false });
  }
};

const edit_profile = async (req, res) => {
  const data = await User.editProfile(req.body);
};

const delete_profile = async (req, res) => {
  const data = await User.getProfile(req.body);
  const { id, userid, name, pw } = data[0];
  res.json({ userid: userid, name: name, pw: pw });
};

module.exports = {
  get_signup,
  get_signin,
  get_profile,
  post_signup,
  post_signin,
  edit_profile,
  delete_profile,
};
