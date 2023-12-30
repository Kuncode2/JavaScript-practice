// //scope
//  var a= 2  // This is the global scope 
//  function a(){
    // This is the functional scope
//  } 

//  {
//     This is the blog scope
//  }
// var is functional scope but the const and the let is block scope 

//  var v = 2
//  {
//  console.log(v) // the out but is the v // now thw variable is in block scope so the answer is same
//  }
//  //condition
//  {let q = 3 }
//  console.log(q) // it will give error and this same for the const
//==============================================================
 
//shadowing and illegical shadowing

// function a(){
//     var a = "b"
//     let b = "a"
//     if(true){
//         let a = "a"
//         var b = "z"
//         console.log(a)
//     }
//     console.log(a)
// }
// a()

// ===================================================================================
// declartion 
// we can declare a variable multipe time  with using var but  not in let and const
// let a =55
// {
//     let a = 2
// }
// console.log(a)

// Decelartion without initinislation
//  var kunal // valid
//  let kunal // vaild
// const kunal // const decleration must be intialized  // assigment to a constant variabl
//...............................................................................


//        =======           HOSTING     ============= 

// moving the function and decelartion to the top of the code is called  hosting

// var a    // this what the javascript do 
// console.log(a)   // this will give undefined
// a = 2

// for lat and const  -- this will give error that we canot give value before we inilitize it  
//  they are hosted in temporary dead zone -(variables declared with let and const exist but cannot be accessed or assigned any value)
