const { Op } = require("sequelize");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
const saltRounds = 10;
// const crypto = require("crypto");
// const secret = crypto.randomBytes(32).toString("hex");

exports.getIndex = (req, res) => {
  res.render("index");
};

exports.get_login = (req, res) => {
  res.render("login");
};

exports.get_signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = async (req, res) => {
  try {
    const { name, id, pw } = req.body;
    const existAccount = await User.findOne({ where: { userid: id } });
    if (!existAccount) {
      const hashedPw = bcrypt.hashSync(pw, saltRounds);
      const newUser = await User.create({ pw: hashedPw, name, userid: id });
      res.json({ isSignUp: true });
    } else {
      res.json({ isSignUp: false });
    }
  } catch (err) {
    console.error(err);
    res.send("Internet Server Error!");
  }
};

exports.post_login = async (req, res) => {
  try {
    const { id, pw } = req.body;
    const findAccount = await User.findOne({ where: { userid: id } });
    const isMatch = bcrypt.compareSync(pw, findAccount.pw);

    // 토큰 생성
    let token;
    if (isMatch) {
      token = jwt.sign({ id: findAccount.id }, process.env.JWT_SECRET);
      res.json({ isMatch, token });
    } else {
      res
        .status(403)
        .json({ isMatch, message: "로그인 비밀번호가 일치하지 않습니다." });
    }
  } catch (err) {
    console.error(err);
    res.send("Internet Server Error!");
  }
};

exports.post_verify = async (req, res) => {
  if (req.headers.authorization) {
    const headers = req.headers.authorization;
    const [bearer, token] = headers.split(" ");
    try {
      const result = jwt.verify(token, process.env.JWT_SECRET); // { id: 5, iat: 1730110124 }

      const findAccount = await User.findOne({ where: { id: result.id } });
      if (findAccount) {
        res.json({
          result: true,
          name: findAccount.name,
          id: findAccount.userid,
          pw: findAccount.pw,
        });
      } else {
        res.status(403).json({ result: false, message: "검증 실패" });
      }
    } catch (err) {
      console.log(err);
      return res.status(403).json({ result: false, message: "검증 실패" });
    }
  } else {
    return res
      .status(401)
      .json({ result: false, message: "Authorization 헤더가 없습니다." });
  }
};
