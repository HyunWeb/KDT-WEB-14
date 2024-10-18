const Visitor = require("../model/Visitor");

const main = (req, res) => {
  res.render("index");
};
const visitor = async (req, res) => {
  // 모델에서 데이터 받아오기

  // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답
  // DB에서 받아올때까지 기다려주는
  // 비동기 처리가 필요하다.
  const data = await Visitor.getVisitors();
  console.log(data);
  res.render("visitor", { data });
};

// POST /visitor
const post_visitor = async (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body;

  const data = await Visitor.postVisitor(name, comment);
  console.log(data);
  
  res.send("fd");
};

module.exports = { main, visitor, post_visitor };
