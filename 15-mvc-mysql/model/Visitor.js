//-------------- my sql 연결 전 -----------------

// exports.getVisitors = (req, res) => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다" },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

//-------------- my sql 연결-----------------
//mysql2/promise : promise 객체로 사용가능한 방식
const mysql = require("mysql2/promise");

// DB연결
//  createConnection: 단일연결
// - 요청을 할때마다 새로운 연결을 생성
// - 적은 수의 동시 연결이나 단순한 데이터베이스 쿼리일 때 사용
//  createPool: 다중연결
// - 연결 풀을 생성. 풀은 미리 정의된 수의 연결을 생성하고 관리
// - 요청이 들어오면 연결 풀에서 사용가능한 연결을 제공. 작업을 완료한 후 해당 연결을 반환
// - 연결이 필요하지 않을 경우 자동 반환, 풀의 연결 수를 제한하고 관리를 최적화
// - 일반적인 웹 서비스에 적합
const pool = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
  connectionLimit: 15, // 최대 연결수 (기본값 10)
});

const getVisitors = async () => {
  const query = "SELECT * FROM visitor";
  const [rows] = await pool.query(query); // 반환값: [[rows], [fields: extra meta data about result]]
  console.log(rows);
  return rows;
};

/*
Prepared Statements
- SQL 쿼리에서 사용자 입력을 안전하게 처리하고 SQL 인젝션 공격을 방지하기 위한 방법
- 입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신, 
- 플레이스 홀더를 사용하여 쿼리를 작성
- mysql 에서는 ?를 사용
*/
const postVisitor = async (name, comment) => {
  const query = "INSERT INTO visitor (name, comment) VALUES (? , ?)";
  // 두번째 인자는 배열로 값을 넣어주면 차례로 ? 자리에 들어간다.
  const [rows] = await pool.query(query, [name, comment]);
  return rows;
};

module.exports = { getVisitors, postVisitor };