const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  secret: "mySessionSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 1000, // 60초
  },
};

app.use(session(sessionConfig));

const userInfo = { id: "banana", pw: "1234" };

const indexRouter = require("./routes");
app.use("/", indexRouter); // localhost:PORT/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
