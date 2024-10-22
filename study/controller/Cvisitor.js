const Visitor = require("../model/Visitor");

const main = (req, res) => {
  res.render("index");
};

const get_visitor = async (req, res) => {
  const data = await Visitor.getVisitors();
  res.render("visitor", { data });
};

const post_visitor = async (req, res) => {
  const { name, comment } = req.body;
  const data = await Visitor.postVisitor(name, comment);
  console.log(data);
  res.send("fd");
};

module.exports = { main, get_visitor, post_visitor };
