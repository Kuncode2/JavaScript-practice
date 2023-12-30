// map, filter ,reduce are the array methods 

// map() = creating a new array by exiting one

// const num = [1,2,3,4]

// const fivetime = num.map((a,i,num) => {
//     return a*5 + i

// })
// console.log(fivetime);

// //  ===========================

// filter() - It takes each element  in an array and apply an condition on it if the condtion is true then it will give true or false
// in short it fullfill the criteria

// const a = [1,2,3,4]
// const less2 = a.filter((z)=>{
//     return z > 2;
// })
// console.log(less2);

// // ============================

//reduce() ->  it is use to reduce the array and give the singe output of an array 

// const a = [1,2,3,4]
// const b = a.reduce((acc,curr,i,arr)=>{      in this code the acc is the initial value
//     return acc+curr
// },0)
// console.log(b);

//======= QUESTIONS ===========

// Q-1 => return only name of student in captical

// let student = [
//     {name:"kunal",rollNumber:24,marks:60},
//     {name:"kuna",rollNumber:2,marks:6},
//     {name:"kun",rollNumber:4,marks:0},
//     {name:"kun",rollNumber:26,marks:61},
// ];

// let list2 = student.map((names)=> names.name.toUpperCase())
// console.log(list2);

//----------------------------------------------------------------

// Q-2 => Return only details of those who scored more than 60 marks

// let scor = student.filter((scored) => scored.marks > 60)
// console.log(scor);
//------------------------------------------------------------------

//Q-3 => More than 60 marks and rollNumber greater than 15

// let details = student.filter((det)=>det.marks > 60 && det.rollNumber > 15)
// console.log(details)
//------------------------------------------------------------------

//Q-4 => Sum of makrs of all student

// let a = student.reduce((ini,curr)=> ini+curr.marks,0)
// console.log(a);

//Q-5 => Return only names of student who scored more than 60 

// const a = student.filter((store) => store.marks > 10).map((store) => store.name);
// console.log(a);

//Q-6 => return total marks for students with mars grater than 60 after 20 marks have been added to those scored less than 60

// const a = student
// .map((mar)=>{
//     if(mar.marks<60){
//         mar.marks += 20
//     }
//     return mar
// })

// .filter((mar) => mar.marks > 60)
// .reduce((ini,curr) => ini+curr.marks,0)

// console.log(a);

