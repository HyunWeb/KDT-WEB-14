// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다" },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
  connectionLimit: 15,
});

const getVisitors = async () => {
  const query = "SELECT * FROM studyvisit";
  const [row] = await pool.query(query);
  return row;
};

const postVisitor = async (name, comment) => {
  const query = "INSERT INTO studyvisit (name, comment) values (?, ?);";
  const [rows] = await pool.query(query, [name, comment]);
  return rows;
};

module.exports = { getVisitors, postVisitor };
