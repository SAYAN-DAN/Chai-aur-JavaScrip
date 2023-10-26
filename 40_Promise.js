// const promiseOne = new Promise(function (resolve, reject) {
//   // Do an async task
//   //DB calls, cryptography , network

//   setTimeout(function () {
//     // resolve()
//     console.log("Async task is compelete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// ***************************************************************************************************************

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Hallo Sayan 1");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Hallo Sayan 2");
// });

// ***************************************************************************************************************

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chota", email: "motadon@.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// ****************************************************************************************************************

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     // let error = false;
//     let error = true;
//     if (!error) {
//       // resolve({ username: "chota", email: "motadon@.com" });
//       resolve({username: "Mota" , password : "12345"})
//     } else {
//       reject("There are something error");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   // .then((username) => {
//   //   console.log(username);
//   // })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("Everything is now ok"));

// ******************************************************************************************************************

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     // let error = false;
//     if (!error) {
//       resolve({ username: "batul", email: "motadon@.com" });
//     } else {
//       reject("There are something error");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// *************************************************************************************************************

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         // console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()
// **********************************************************************************************************

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
// **************************************************************

// promise.all
// yes this is also available, kuch reading aap b kro.

// ***************************************************************************************************

// const p1 = Promise.resolve(3);
// const p2 = 1337;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values); // [3, 1337, "foo"]
// });
// *****************************************************************************************

// // Create a promise (p) that resolves when all values in the array are non-promises.
// const p = Promise.all([1, 2, 3]);

// // Create a promise (p2) that resolves when all values in the array, including a resolved promise, are considered fulfilled.
// const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);

// // Create a promise (p3) that rejects when one of the values in the array is a rejected promise.
// // const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// // Use setTimeout to log the results after the event loop has processed the promises.
// setTimeout(() => {
//   console.log("p:", p);     // Resolves with [1, 2, 3]
//   console.log("p2:", p2);   // Resolves with [1, 2, 3, 444]
//   // console.log("p3:", p3);   // Rejects with reason 555
// });

// ******************************************************************************************

// // Passing an array of promises that are already resolved,
// // to trigger Promise.all as soon as possible
// const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// const p = Promise.all(resolvedPromisesArray);
// // Immediately logging the value of p
// console.log(p);

// // Using setTimeout, we can execute code after the queue is empty
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p);
// });

// // Logs, in order:
// // Promise { <state>: "pending" }
// // the queue is now empty
// // Promise { <state>: "fulfilled", <value>: Array[2] }

// *************************************************************************************************

// Create an array containing two promises, one resolved and one rejected.
const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];

// Use Promise.all to wait for all promises in the array to settle.
const p = Promise.all(mixedPromisesArray);

// Log the initial state of the Promise (pending).
console.log(p);

// Use setTimeout to log a message and the settled state of the Promise after the event loop has processed the promises.
setTimeout(() => {
  console.log("the queue is now empty");

  // Log the settled state of the Promise (rejected).
  console.log(p);
}, 0); // Using 0ms delay to ensure it's executed after the event loop.
