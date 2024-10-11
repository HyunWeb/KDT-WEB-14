const express = require("express");
const app = express();
const PORT = 8000;

// express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set("view engine", "ejs");
// 템플릿 엔진 파일을 저장할 위치 등록 첫번째 인자는 속성명이라 고정 (default 폴더명은 views)
app.set("views", "./views");

// static 미들웨어 등록 (정적 파일 로드 ex. css, js, img 등의 파일)
// 앞의 이름은 접근할 이름, 뒤의 이름이 실제 폴더 명
// static 이라는 실제 폴더를 public이라는 이름으로 접근하겠다.
// __dirname + "/static" 는 현재까지의 절대경로 + static까지 이동해서 절대경로 지정
app.use("/public", express.static(__dirname + "/static"));
console.log(__dirname);

//app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// 요청 메서드 : get
// 요청 주소 : "/" => "서버주소:포트번호/" > "http://localhost:8000/"
app.get("/", function (req, res) {
  // res.send(응답 내용)
  // res.send("hello express!");

  // index.ejs 라는 파일을 렌더
  // Express에서 설정된 템플릿 엔진에 따라 렌더링할 파일을 선택한다.
  res.render("index", {
    btns: ["사과", "오렌지", "키위"],
    isLogin: true,
    me: {
      name: "jongHyun",
      msg: "안녕하세요",
    },
  });
});

//login 경로로 요청이 들어오면 로그인 페이지 응답
app.get("/login", function (req, res) {
  res.render("login");
});
app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(PORT, function () {
  console.log(`server listening on ${PORT}! http://localhost:${PORT}`);
});
