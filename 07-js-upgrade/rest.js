// rest 파라미터
// 1. 함수에서 rest 사용할 때
const values = [10, 20, 30, 40, 50, 60];

function get(a, b, ...rest) {
  console.log("a >", a);
  console.log("b >", b);
  console.log("rest >", rest);
}

get(...values); //spread 연산자로 펼쳐서 넣어줌
get(values);
// a > [10, 20, 30, 40, 50, 60]
// b > undefined
// rest > []

// 2. 객체에서 rest 사용
const icecream = {
  company: "lotte",
  flavor: "choco",
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor); // "choco"
console.log(rest); //{ company: "lotte", price: 1000,}

// 3. 배열에서 rest 사용
const number = [1, 2, 3, 4, 5];
const [one, two, ...rest1] = number;
console.log(one, two, rest1); // 1 2 [3, 4, 5]
