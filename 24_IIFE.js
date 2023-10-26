// IIFE (Immediately Invoked Function Expression)
  // ************************************************************************

// Named IIFE
(function chai()  {
    console.log(`DB CONNECTED`);
  }) () ;
    //  **************************************************************************
    
    //unnamed IIFE
  ( (name) =>  {
    console.log(`DB CONNECTED Two ${name}`);
  }) ("Sayan")