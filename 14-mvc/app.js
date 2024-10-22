const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [Before] MVC 적용 전에는 app.js에서 라우트 정의
// 단점 : 라우터(경로)가 많아진다면? app.js 코드가 길어진다. -> 유지보수성 하락으로 이어짐
// app.get("/", (req, res) => {
//   res.render("index");
// });

// [After] Router 객체로 라우터 분리
const indexRouter = require("./routes/index"); // index는 생략 가능
app.use("/", indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

// 실습
const userRouter = require("./routes/user");
app.use("/user", userRouter); // localhost:PORT/user 경로를 기본으로 user.js 라우트 파일에서 처리

// [404 error]
// 나머지 코드가 무시되지 않도록 맨 마지막에 라우트로 선언
// 위에서 해당 경로가 없을때 이쪽으로 오게 될 것
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
