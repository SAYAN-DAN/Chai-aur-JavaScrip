// [] => This is a Array
// "" => This is a string
// {} => This is a Object

//for of *******************************************************************************************
// const arr =[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }
// *******************
//  const hallo = "Hal;lo world"

//  for (const s of hallo) {
//     console.log(`Value is ${s}`);
//  }

//Maps*************************************************************************************************

//  const map1 = new Map();
//  map1.set('IN' , "INDIA")
//  map1.set('USA' , "United States of Amarica")
//  map1.set('Fr' , "France")

//  console.log(map1);

//  for (const [key,Value] of map1) {
//     console.log(key , ':-', Value);
//  }

//*******************************************************************************************************
// const myObject ={
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'

// }
//  for (const [key,Value] of myObject) {
//       console.log();
//  }
// *********************************************************************************************************

// const myObject = {
//     js: 'jsvascript',
//     cpp : 'C++',
//     rb : "ruby",
//     swift : "swift by apple"
// }

// for (const key in myObject) {
//     //  console.log(key);
//     // console.log(myObject[key]);
//     console.log(`${key} :- ${myObject[key]}`);
// }

//   ***********************************************************************************************************

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {

//     // console.log(key);
//     console.log(programming[key]);
// }

// *******************************************************************************************************************

//  const map1 = new Map();
//  map1.set('IN' , "INDIA")
//  map1.set('USA' , "United States of Amarica")
//  map1.set('Fr' , "France")

//        for (const key in map1) {
//            console.log(key);
//        }
//    *******************************************************************************************************************
//************************************************************
// const coding = ["js", "ruby", "java", "python", "cpp"];

//   coding.forEach(function(val){
//     console.log(val);
//   })
//  *******************************
//   coding.forEach( (item) => {
//     console.log(item);
//   }  )
// ********************************
//   function printMe (item) {
//     console.log(item);
//   }
//   coding.forEach(printMe)

// ********************************
//   coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
//   }  )
// **********************************************************
//   const myCoding = [
//     {
//         languageName : "javaScript",
//         languageFileName : "javaScript"
//     } ,
//     {
//         languageName : "Python",
//         languageFileName : "Python"
//     } ,
//     {
//         languageName : "java",
//         languageFileName : "java"
//     }
//   ]

//   myCoding.forEach ( (item) => {
//         console.log(item.languageFileName);
//   })

//********************************************************* */
// map1.set('a', 1);
// map1.set('b', 2);
// map1.set('c', 3);

// console.log(map1.get('a'));
// // Expected output: 1

// map1.set('a', 97);

// console.log(map1.get('a'));
// // Expected output: 97

// console.log(map1.size);
// // Expected output: 3

// map1.delete('b');

// console.log(map1.size);
// // Expected output: 2
