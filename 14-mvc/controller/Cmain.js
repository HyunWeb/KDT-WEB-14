// main 을 index.js 로 내보낸다.

const Comment = require("../model/Comment");
// Get /
const main = (req, res) => {
  res.render("index");
};
// Get / comments
const comments = (req, res) => {
  console.log(Comment.commentInfos());
  res.render("comments", { CommentInfos: Comment.commentInfos() });
};

// Get / comment/:id
const comment = (req, res) => {
  console.log(req.params); // 라우트 매개변수에 대한 정보 담겨 있음
  console.log(req.params.id); // id 고유 값

  const comments = Comment.commentInfos(); // 댓글 목록 배열
  const commentId = req.params.id;
  console.log(comments[commentId - 1]);

  // 존재하지 않는 댓글의 id로 접근하면 404 띄우기
  if (commentId < 1 || commentId > comments.length) {
    return res.render("404");
  }

  // :id 변수에 숫자가 아닌 값이 온다면 404 띄우기
  if (isNaN(commentId)) {
    return res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};

module.exports = { main, comments, comment };
