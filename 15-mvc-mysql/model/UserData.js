const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
  connectionLimit: 15, // 최대 연결수 (기본값 10)
});

const signUp = async ({ id, name, pw }) => {
  const query = "INSERT INTO user (userid, name, pw) VALUES (?, ?, ?)";
  const [rows] = await pool.query(query, [id, name, pw]);
  return rows;
};

const overlapText = async ({ id, name, pw }) => {
  const query = "SELECT * FROM user WHERE userid = ? AND pw = ?";
  const [rows] = await pool.query(query, [id, pw]);
  return rows;
};
const signIn = async ({ id, pw }) => {
  const query = "SELECT * FROM user WHERE userid = ? AND pw = ?";
  const [rows] = await pool.query(query, [id, pw]);
  return rows;
};
const getProfile = async ({ id, pw }) => {
  const query = "SELECT * FROM user WHERE userid = ? AND pw = ?";
  const [rows] = await pool.query(query, [id, pw]);
  return rows;
};
const editProfile = async ({ name, id, pw }) => {
  const query = "UPDATE user SET userid = ?, name = ?, pw = ? WHERE ";
};
module.exports = {
  signUp,
  overlapText,
  signIn,
  getProfile,
  editProfile,
};
