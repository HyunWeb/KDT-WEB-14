// setTimeout(function () {
//   document.body.style.backgroundColor = "red";
//   setTimeout(function () {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(function () {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(function () {
//         document.body.style.backgroundColor = "green";
//         setTimeout(function () {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

function changeBackgroundColor(newColor) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, 1000);
  });
}

async function exec() {
  await changeBackgroundColor("red");
  await changeBackgroundColor("orange");
  await changeBackgroundColor("yellow");
  await changeBackgroundColor("green");
  await changeBackgroundColor("blue");
}

exec();
