// const ps = process.env;
// console.log(ps);

const express = require("express");

const dotenv = require("dotenv");
dotenv.config(); // env 파일을 불러온다.

const app = express();

const PORT = process.env.PORT; // env 파일에서 가져온다.

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
