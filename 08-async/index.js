// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000); // 2초 기다리고 실행
// console.log(3);
// // 1 3 2 순서다. (비동기 특성 때문)

////////////////////////////////
// ex. 편의점에 가서 음료수를 사고 나오는 상황
/*
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다...");
}

function pickDring() {
  // 3초 기다린 후에 코드 실행 (3초 고민)
  setTimeout(function () {
    console.log("고민끝!");
    product = "제로콜라";
    price = 2000;
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명 : ${product}, 가격: ${price}`);
}
let product;
let price;
goMart();
pickDring();
pay(product, price);
*/
////////////////////////////////
// 1. 콜백 함수를 이용해 비동기 처리
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다...");
}

function pickDring(callback) {
  // 3초 기다린 후에 코드 실행 (3초 고민)
  setTimeout(function () {
    console.log("고민끝!");
    product = "제로콜라";
    price = 2000;
    // pay() 함수 실행
    callback(product, price);
  }, 3000);
}

function pay(product, price) {
  console.log(`상품명 : ${product}, 가격: ${price}`);
}
let product;
let price;
goMart();
pickDring(pay);

function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}
function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}
function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

call("kim", function (name) {
  console.log(name + "반가워");
  back(function (txt) {
    console.log(txt + "을 실행했구나");
    hell(function (message) {
      console.log("여기는" + message);
    });
  });
});
