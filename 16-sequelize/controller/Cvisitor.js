//models/index를 불러와서 export한 db 객체
const models = require("../models/index");
const Visitor = models.Visitor;
// const Visitor = require("../model/Visitor");

// GET /
const main = (req, res) => {
  res.render("index");
};

// GET /visitors
const get_visitors = async (req, res) => {
  // 모델에서 데이터 받아오기

  // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답
  // 비동기 처리가 필요하다
  const data = await Visitor.findAll(); // [{},{}, ...]
  console.log(data);
  res.render("visitor", { data });
};

// POST /visitor
const post_visitor = async (req, res) => {
  console.log(req.body);
  const { name, comment } = req.body;

  // INSERT INTO nititor (name, comment) VALUES (?,?)
  const data = await Visitor.create({
    name: name,
    comment: comment,
  });
  console.log(data); // {id: 3, name: '테스터', comment: '안녕하세요'}
  res.json(data);
};

// GET /visitor or /visitor/:id
const get_visitor = async (req, res) => {
  console.log(req.query);
  console.log(req.params);

  // const data = await Visitor.getVisitor(req.query.id);
  // const data = await Visitor.getVisitor(req.params.id);

  // SELECT * FROM visitor WHERE id = ? limit 1
  const data = await Visitor.findOne({ where: { id: req.params.id } });
  console.log("findOne: ", data); // { id: 1, name: '홍길동', comment: '내가 왔다.' }

  res.json(data);
};

// PATCH /visitor
const patch_visitor = async (req, res) => {
  console.log(req.body);

  //UPDATE visitor SET name = ?, comment = ? WHERE id = ?
  const data = await Visitor.update(
    {
      name: req.body.name,
      comment: req.body.comment,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  console.log("update : ", data);
  res.json({ result: true });
};

// DELETE /visitor
const delete_visitor = async (req, res) => {
  console.log(req.body);

  // DELETE FROM visitor WHERE id = ?
  const data = await Visitor.destroy({
    where: { id: req.body.id },
  });
  console.log("destory: ", data);
  res.json({ result: true });
};

module.exports = {
  main,
  get_visitors,
  post_visitor,
  get_visitor,
  patch_visitor,
  delete_visitor,
};
