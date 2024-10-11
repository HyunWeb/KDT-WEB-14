// math 모듈을 불러와서 사용

// const add = require("./math");
// console.log(add(5, 7));

// const hello = require("./math");
// console.log(hello(4, 5));

// math2 모듈 불러오기
// const math2 = require("./math2");
// console.log(math2.add(4, 5));
// console.log(math2.PI);

// 구조 분해 할당
const { add, PI } = require("./math2");

console.log(add(4, 5));
console.log(PI);
