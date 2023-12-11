// const p1 = new Promise(function (resolve, reject) {
//   // do an async task
//   // DB calls, cryptography, network
//   setTimeout(function () {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);
// });

// p1.then(function () {
//   console.log("promise consumed");
// });

// //  second method

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// // third method

// const p3 = new Promise(function (resolve, reject) {
//   setTimeout(function () {}, 1000);
//   resolve({ username: "vikas", email: "vikas@gmail.com" });
// });
// p3.then(function (user) {
//   console.log(user);
// });

// // four Method

// const p4 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "vikas", password: "123" });
//     } else {
//       reject("ERROR: something went wrong");
//     }
//   }, 1000);
// });
// p4.then((user) => {
//   console.log(user);
//   return user.username;
// })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (er) {
//     console.log(er);
//   })
//   .finally(() => console.log("finally done for Project"));

// const p5 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumep5() {
//   try {
//     const response = await p5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumep5();

// async function getAll() {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAll();

fetch("https://dummyjson.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
