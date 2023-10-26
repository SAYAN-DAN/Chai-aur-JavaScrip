

function calculateCartPrice(val1,val2,...num1){
    return num1
  }
  console.log(calculateCartPrice(200,400,60,78888,8887,77,7)) 
  
  
  const user = {
    username: "sayan",
    price: 299
  };
  
  function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  }
   
  handleObject(user);// Call the function with the 'user' object as an argument
  
  
  handleObject({
    username: "sun",
    price: 233
  });
  
  const myNewArray = [20, 39, 44, 455];
  
  function returnSecondValue(getArray) {
    return getArray[1];
  }
  
  console.log(returnSecondValue(myNewArray)); // Use 'myNewArray' instead of 'myNewarray'
  
  console.log(returnSecondValue([20, 39, 44, 455]));