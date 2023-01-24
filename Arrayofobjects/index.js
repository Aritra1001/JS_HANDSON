let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ]

//Ans1.
//  let ans =[];
//  for(let  i=0; i < studentRecords.length; i++){
//     ans.push(studentRecords[i].name.toUpperCase());
//  }                      
//  console.log(ans);

//Ans2.
// let ans = [];
// for(let i = 0; i < studentRecords.length; i++){
//     if(studentRecords[i].marks > 50){
//         ans.push(studentRecords[i]);
//     }
// }
// console.log(ans);

//Ans3.
// let ans = [];
// for(let i = 0; i < studentRecords.length; i++){
//     if(studentRecords[i].marks > 50 && studentRecords[i].id > 120){
//         ans.push(studentRecords[i]);
//     }
// }
// console.log(ans);

//Ans4.
// let sum = 0;
// for(let i = 0; i <studentRecords.length; i++){
//     sum = sum + studentRecords[i].marks;
// }
// console.log(sum);

//Ans5.
// let ans = [];
// for(let i = 0; i < studentRecords.length; i++){
//     if(studentRecords[i].marks > 50){
//         ans.push(studentRecords[i].name);
//     }
// }
// console.log(ans);

//Ans6. 
// let sum = 0;
// for(let  i = 0; i < studentRecords.length; i++){
//     if(studentRecords[i].id > 120){
//         sum = sum + studentRecords[i].marks;
//     }
// }
// console.log(sum);

//Ans7.

// for(let  i = 0; i < studentRecords.length; i++){
//     let sum = 15;
//     if(studentRecords[i].marks < 50){
//       sum += studentRecords[i].marks;
//       studentRecords[i].marks = sum;
//     }
// }
// let total = 0;
// for(let i = 0; i < studentRecords.length; i++){
//     if(studentRecords[i].marks > 50){
//         total += studentRecords[i].marks; 
//     }
// }
// console.log(total);

//Ans8.
// let arrOfObj =[];
// let obj1 = {name:"Aritra", class:"6", Rollno: "1" }
// let obj2 = {name:"Anuj", class:"7", Rollno: "1" }
// let obj3 = {name:"Hitesh", class:"8", Rollno: "1" }
// let obj4 = {name:"Amit", class:"9", Rollno: "1" }
// let obj5 = {name:"Abhishek", class:"10", Rollno: "1" }
// let obj6 = {name:"Vinayak", class:"11", Rollno: "1" }
// arrOfObj.push(obj1,obj2,obj3,obj4,obj5,obj6);
// console.log(arrOfObj);
