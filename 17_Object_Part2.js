

   // const tinderUser = new Object()
   const tinderUser = {}

   tinderUser.id = "123abc"
   tinderUser.name = "Sayan"
   tinderUser.isLoggedIn = false
 
 console.log(tinderUser);
 
 
 const regularUser = {
   email: "mota@gmail.com",
   fullname: {
     userfullname: {
       firstname: "Sayan",
       lastname: "Dan"
     }
   }
 };
 
 console.log(regularUser.fullname);
 console.log(regularUser.fullname.userfullname.firstname);
 
 
 // const regularUser = {
 //     email: "some@gmail.com",
 //     fullname: {
 //         userfullname: {
 //             firstname: "hitesh",
 //             lastname: "choudhary"
 //         }
 //     }
 // }
 // console.log(regularUser.fullname)
 // console.log(regularUser.fullname.userfullname.firstname);
 
 
 
 const obj1 = {1:"a",2:"b" }
 const obj2 = {3:"c",4:"d" }
 const obj4 = {5:"c",6:"d" }
 
 
 // const obj3 ={ obj1,obj2 }
 // const obj3 = Object.assign({},obj1,obj2,obj4)
 
 const obj3 ={...obj1,...obj2,...obj4}
 console.log(obj3);
 
 
 // const users = [
 //   {
 //     id:1,
 //     email:"mota@ggmail.com"
 //   }
 //     {
 //     id:1,
 //     email:"mota@ggmail.com"
 //   }
 //   {
 //     id:1,
 //     email:"mota@ggmail.com"
 //   }
 // ]
 
 // users[1].email
 
 const users = [
   {
     id: 1,
     email: "mota@ggmail.com"
   },
   {
     id: 2,
     email: "mota@ggmail.com"
   },
   {
     id: 3,
     email: "mota@ggmail.com"
   }
 ];
 
 users[1].email
 
 
 console.log(tinderUser);
 
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 
 
 console.log(tinderUser.hasOwnProperty("isLoggedIn"))
 console.log(tinderUser.hasOwnProperty("isLogged"))
 