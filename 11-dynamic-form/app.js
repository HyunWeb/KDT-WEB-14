const express = require("express");
const app = express();
const PORT = 8000;
const userInfo = {
  id: "abcd",
  pw: "1234",
};
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  // res.render("index");
  res.render("practice2");
});

// ajax get
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// ajax post
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios get
app.get("/axios", (req, res) => {
  console.log(req.query);
  // res.send(req.query);
  res.json(req.query);
});

// axios post
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// fetch get
app.get("/fetch", (req, res) => {
  console.log(req.query);
  // res.send(req.query);
  res.json(req.query);
});

// fetch post
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/axiosPractice", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
// axios post
app.post("/axiosPracticePost", (req, res) => {
  // let result = {
  //   ment: "",
  //   color: "",
  // };
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    // result.ment = "로그인에 성공하였습니다.";
    // result.color = "blue";
    res.json({ userInfos: req.body, isSuccess: true });
  } else {
    // result.ment = "로그인에 실패하였습니다.";
    // result.color = "red";
    res.json({ isSuccess: false });
  }
  // res.send(result);
});

app.listen(PORT, () => {
  console.log(`port id opening on ${PORT}`);
});
