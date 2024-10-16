const express = require("express");
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require("multer");
const path = require("path"); // 경로에 관한 내장 모듈

const upload = multer({
  //destination _ 목적지
  dest: "uploads/", // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});

// multer 세부 설정
const uploadDetail = multer({
  // storage : 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    // destination: 경로 설정
    destination(req, file, done) {
      // done: callback function
      // done(null, "~~") 여기서 null은 error를 의미하는 매개변수
      // 에러가 없으므로 "null" 이라고 전달하여 콜백함수를 호출
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자"를 추출
      console.log("ext", ext);
      // 원본 이름에서 ext인 확장자를 제거한다.
      console.log(path.basename(file.originalname, ext));
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },

    // limites : 파일 제한 정보
    limites: { fileSize: 5 * 1024 * 1024 }, //5MB
  }),
});

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static(__dirname + "/uploads"));

app.get("/", (req, res) => {
  res.render("practice");
});

//1. single(): 하냐의 파일을 업로드
// upload.single("userfile") : ("파일의 name")
// 클라이언트의 요청이 들어오면 multer 설정(upload 변수)에 따라 파일을 업로드 한 후에
// req.file 객체 생성
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  // req.file : 파일 업로드 정보
  // req.vody: 파일 외의 정보들
  console.log(req.file);
  console.log(req.body);

  res.send("파일 업로드 완료!");
  /*
  {
    fieldname: 'userfile', // 폼에 정의한 name 값
    originalname: 'skill1.jpg', // 원본 파일 명
    encoding: '7bit', // 파일 인코딩 타입
    mimetype: 'image/jpeg',  // 파일 타입
    destination: 'uploads/', // 파일 저장 경로
    filename: '98ee99eed4dec954c639ae8fb88f68d2', // destination에 저장된 파일명
    path: 'uploads/98ee99eed4dec954c639ae8fb88f68d2', // 업로드된 파일 전체 경로
    size: 80077 // 파일 크기
  }
   */
});

// 2. array() : 여러 파일을 한번에 업로드
// uploadDetail.array("userfiles")
// 파일을 업로드 한 후, req.files 객체 생성
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files); //[{파일1_정보}, {파일2_정보}, ...]
  console.log(req.body);
  res.send("하나의 인풋에 여러 파일 업로드 완료");
});

// 3. fields() : 여러 파일을 각각의 인풋에 업로드
// req.files에서 파일 정보를 확인
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfiles1" }, { name: "userfiles2" }]),
  (req, res) => {
    console.log(req.files); // {userfile1: [{파일정보1}], userfile2: [{파일정보2}]}
    console.log(req.body);
    res.send("여러개의 인풋에 각각의 파일 업로드 완료");
  }
);

// 동적 폼 전송
app.post("/dynamicFile", uploadDetail.single("dynamicUserFile"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

// 실습 코드

//practice upload 설정
const practiceUpload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.userId + ext);
    },
    limites: { fileSize: 5 * 1024 * 1024 },
  }),
});

// 라우팅
app.post("/upload/practice", practiceUpload.single("userImg"), (req, res) => {
  practiceUpload.userId = req.body.userId;
  res.render("result", {
    userInfo: req.body,
    profile: req.file.path,
  });
});

// 동적 연습
app.post("/uploadD", practiceUpload.single("d_file"), (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} is opening`);
});
