// ****************************************************************************************************

// let a = 30
// const b = 20
// var c = 1200

 // if (true){
 //   let a = 30
 //   const b = 20
 //   var c = 1200
 // }

// Variables declared using the var keyword are either globally or functionally scoped, they do not support block-level scope. This means that if a variable is defined in a loop or in an if statement it can be accessed outside the block and accidentally redefined leading to a buggy program.

// console.log(a);
// console.log(b);
// console.log(c);


// ***********************Example 1*************************


// Example 1: Using 'var' in a block scope

// if (true) {
//     var blockScopedVar = "I'm in a block!";
//   }
  
//   console.log(blockScopedVar); // Outputs: "I'm in a block!"
  
   // we declare a variable blockScopedVar inside an if block, but it can still be accessed outside the block. This is because variables declared with var are functionally scoped or globally scoped, and they don't respect block-level scope. It can lead to unintended consequences if you accidentally redefine the variable:
  
  // ***********************Example 2*************************
  
  
  // Example 2: Redefining a 'var' variable in a block
  
  // var outsideVar = "I'm outside the block.";
  
  // if (true) {
  //   var outsideVar = "I'm inside the block!"; // This redefines 'outsideVar'
  // }
  
  // console.log(outsideVar); // Outputs: "I'm inside the block!"
  
  // The original 'outsideVar' value is overwritten.
   // the variable outsideVar is redefined inside the if block, and it overwrites the value of the outer outsideVar. This behavior can lead to unintended side effects and is one of the reasons why the use of let and const, which support block-level scope, is recommended over var in modern JavaScript.
  
  
  
  //  **************************************************************************************************

  // let a = 300
  // let e = 900
  // const b = 20
  // const c = 100
  // const d = 100
  // var f = 1000
  // var g = 4000

  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);
  // console.log(e);
  // console.log(f);
  // console.log(g);
  
    // ********************************************************************************************

  //  if (true) {
  //    let a = 30
  //    const b = 20
  //    let c = 100
  //    console.log("INNER:", a)
  //    console.log("INNER:", b)
  //    console.log("INNER:", c)
  //  }
  
