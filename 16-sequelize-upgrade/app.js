const express = require("express");
const app = express();
const PORT = 8000;

const router = require("./routes");
const { sequelize } = require("./models");

// 뷰 엔진 설정 (예: EJS)
app.set("view engine", "ejs");

// 뷰 파일 경로 설정 (보통 ./views)
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
