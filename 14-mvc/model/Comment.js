// (임시) DB에서 전체 댓글 목록을 받았다고 가정
exports.commentInfos = () => {
  return [
    {
      id: 1,
      userid: "hellowWorld",
      date: "2022-10-31",
      comment: "안녕하세요!!",
    },
    {
      id: 2,
      userid: "hello",
      date: "2022-12-05",
      comment: "반갑습니다~",
    },
    {
      id: 3,
      userid: "happy",
      date: "2022-12-17",
      comment: "잘부탁드려요",
    },
    {
      id: 4,
      userid: "lucky",
      date: "2023-02-05",
      comment: "좋은 하루 보내세요",
    },
  ];
};
exports.userInfos = () => {
  const userInfo = {
    ID: "banana",
    PW: "1234",
  };
  return userInfo;
};
