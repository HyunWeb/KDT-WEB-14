const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/static", express.static(__dirname + "/static")); // 정적 파일 접근 위해
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
