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

//Q3 - what are first call function?

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

for (let i = 0; i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i *1000)
}