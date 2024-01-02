// Functions in Javascript
// Q1 - what is function declarations?

// we can called this function decelartion or function statment

// function square(n){
//     return num*num
// }

// Q2 - what is function expression ?

// when we store a variable inside a function  
// And only function part is called anoniums function

// const square = function (numm){
//     return numm +numm
// }
// console.log(square(5));

//Q3 - what are first CLASS function?

// when we use that function as a variable and passing that function into another n

// function sq(a){
//     return a + a
// }
// function tq(b){
//     console.log(b(5));
// }

// tq(sq)

//Q4 - What is IIFE(imdetialy invoke function expression)
// (function sq(a){
//      console.log(a+a)
// }(5))

//Q5 - IIFe -o/p based question?

// (function (x) {
//     return(function(y){
//         console.log(x); //1// This is the colsure  (rember - lexcilly outside)
//     })(2);
// })(1)

//Q6 - Function scope - O/P Based Question

// for (let i = 0; i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i *1000)
// }

//Q7 - Function Hoisting
//console.log(a);
//a = 20   //  in this it  will give error that the variable not been initilaized

// a()
// function a(){
//     console.log("lunal");

//     console.log(a);
// }
// var a = 20

// Q8 - Function Hositing - O/P Based Question
// var x = 21
// var fun = function(){
//     console.log(x);   // in this when an var  is present in the functional scope the the value of this is undefined
                         // (it's only applicable on this condtion)
//     var x = 20;
// };
// fun()

//Q9 - Params vs Arguments

// function square(num){   // Params
//     console.log(num*num);
// }
// square(5) // Arguments


// function square(...num){  // rest Opertaor
//          console.log(num[0] + num[1])
//      }
//      var arr  = [1,2]
//  square(...arr) // spread Opertaor

//Q10 - Params vs Arguments - O/P Based Question

// const fn = (a, x, y, ...numbers)=>{
//     console.log(x,y, numbers);
// };
// fn(1,2,3,4,5,6)

// Q11 - callback Function  -- A cllback function is passed into another function is called callback function

//Ex
// document.addEventListener("click", function(parma){

// })

// Q12 - Arrow functions vs Regular Function

//1 - Syntex
// function square(num){
//     return num*num
// }

// const square = (num) =>{
//     return num*num
// }

//2 - implicite "return" keyword

// const square = (num) => num*num

// 3 - arguments

// function fn(){
//     console.log(arguments);
// }
// fn(1,2,3)

// function fn = () =>{ //syntexerror Unexpected token'=' 
// console.log(arguments);
// }
// fn(1,2,3)

