exports.index = (req, res) => {
  const user = req.session.name;
  console.log(user);
  if (user !== undefined) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
};
exports.get_login = (req, res) => {
  res.render("login");
};

exports.post_login = (req, res) => {
  const { id, pw } = req.body;
  if (id === "banana" && pw === "1234") {
    req.session.name = id;
    res.json({ isLogin: true });
  } else {
    res.json({ isLogin: false });
  }
};

exports.get_logout = (req, res) => {
  const user = req.session.user;

  if (user !== undefined) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.send("fail");
      }
      res.send("success");
    });
  } else {
    // 유저가 브라우저의 /logout으로 접근
    res.send("잘못된 접근입니다.");
  }
};
