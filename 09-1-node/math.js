// math module
// 하나의 파일에 한개

// add 더하기 함수를 정의
const add = (a, b) => a + b;

// add 라는 함수를 다른 js 파일에서 쓸수 있도록 내보낸다.
module.exports = add;
