// async = await
// async : 함수 앞에 붙이는 키워드
// - 함수만 보고도 비동기 함수임을 유추하고자 함
// - 프로미스를 반환

// await : 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다린다.
// await 뒤에는 프로미스가 오게 된다.
// async 키워드를 사용한 함수 안에서만 await 키워드를 사용 가능하다.

// 예제 1
// async function f1() {
//   return 1;
// }

// console.log("1 >> ", f1()); // Promise {<fulfilled>: 1}

// f1().then((result) => {
//   console.log(result);
// });

// // 예제 2
// // 1초 뒤에 과일 배열을 출력하는 코드
// function fetchFruits() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       const fruits = ["사과", "레몬", "수박"];
//       resolve(fruits);
//     }, 1000);
//   });
// }

// // then - catch
// fetchFruits()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // async - await 사용시 에러처리는
// try-catch 구문으로 한다.
// async function printFruits() {
//   try {
//     const fruits = await fetchFruits();
//     console.log(fruits);
//   } catch (error) {
//     console.log(error);
//   }
// }

// printFruits();

// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다...");
// }

// // 2. 프로미스 예제

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     // 3초 기다린 후에 코드 실행 (3초 고민)
//     setTimeout(function () {
//       console.log("고민끝!");
//       product = "제로콜라";
//       price = 2000;
//       resolve();
//     }, 3000);
//   });
// }

// function pay(product, price) {
//   console.log(`상품명 : ${product}, 가격: ${price}`);
// }

// async function exec() {
//   goMart();
//   await pickDrink();
//   pay(product, price);
// }
// let product;
// let price;
// exec();
// pay(product, price);

// call -> back -> hell 순서로 실행
// call("kim")
//   .then((name) => {
//     console.log(name + "반가워");
//     return back();
//   })
//   .then((txt) => {
//     console.log(txt + "을 실행했구나");
//     return hell();
//   })
//   .then((message) => {
//     console.log("여기는 " + message);
//   });

setTimeout(function () {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "orange";
    setTimeout(function () {
      document.body.style.backgroundColor = "yellow";
      setTimeout(function () {
        document.body.style.backgroundColor = "green";
        setTimeout(function () {
          document.body.style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

let colors = ["red", "orange", "yellow", "green", "blue"];
