

// console.log("s")
// console.log("a")
// console.log("y")
// console.log("a")
// console.log("n")
// console.log("d")
// console.log("d")
// console.log("a")


function sayMyName(){
    console.log("s")
  console.log("a")
  console.log("y")
  console.log("a")
  console.log("n")
  console.log("d")
  console.log("d")
  console.log("a")
  }
  
  // sayMyName()
  
  
  // function aaddTwoNumbers(number1,number2) {
  //   console.log(number1 + number2);
  // }
  // aaddTwoNumbers(15,30)
  // aaddTwoNumbers(15,"30")
  // aaddTwoNumbers(15,"a")
  // aaddTwoNumbers(15,"null")
  // aaddTwoNumbers(15,"undefined")
  // aaddTwoNumbers("15",30)
  // aaddTwoNumbers("15","30")
  
  
  
  function addTwoNumbers(number1,number2) {
    // let result = number1+number2
    // return result
    // *************or****************
    return number1+number2
  }
  
  const result = addTwoNumbers(3,5)
  console.log("Result: ",result);
  
  
  function loginUserMassage(username){
    if(username===undefined){
      console.log("please enter a usrname");
    }
    return `${username} just logged in`
  }
  
  // loginUserMassage("sayan")
  console.log(loginUserMassage("sayan"))
  console.log(loginUserMassage())