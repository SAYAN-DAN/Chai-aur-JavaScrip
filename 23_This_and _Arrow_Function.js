


//  ***********************************************************************************************************
const user = {
    username: "Sayan",
    price: 999,
    welcomeMessage: function () {
      console.log(`${this.username}, welcome to the website`);
      console.log(this)
    }
  };
  
  // user.welcomeMessage(); // Call the welcomeMessage method
  // user.username = "sam"
  // user.welcomeMessage()
  
  
  // console.log(this)
  
  //The global object in javaScript is Window
  
   // ********************************************************************************************************
  
  // function mota() {
  //   let username = "Sayan" 
  //   console.log(this);
  // }
  // mota()
  
  // **********************************************************************************************************
  
  // function mota() {
  //   let username = "Sayan" 
  //   console.log(this.username);
  // }
  // mota()
  
  //**********************************************************************************************************
  
  // const chai = function ()  {
  //   let username = "Sayan"
  //   console.log(this.username);
    
  // }
  // chai()
  
  //**********************************************************************************************************
  
  // *****************arrow function******************
  
  // const chai = () =>  {
  //   let username = "Sayan"
  //   console.log(this.username);
    
  // }
  // chai()
  
  
  //**********************************************************************************************************
  //  const addTwo = (num1,num2) => {
  //    return num1 + num2
  //  }
  // console.log(addTwo(3,4))
  
  // *********************************************************************************************************
   // const addTwo = (num1,num2) => num1 + num2
   // const addTwo = (num1,num2) => (num1 + num2)
   // const addTwo = (num1,num2) => {username:"Sayan"}
  //  const addTwo = (num1,num2) => ({username:"Sayan"})
   
  // console.log(addTwo(3,4))
  
  
  //*********************************************************************************************************
  
  // const myArray =[2,3,45,6,87,8]
  // myArray.forEach()