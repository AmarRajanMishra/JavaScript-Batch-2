// "use strict"

// console.log('This is External JavaScript')
// variable
// var myName;
// var MYNAME;
// var MyName;
// rajat
// Rajat
// RAJAT
// Data Types
// 1. Primitive Data Type

// Number
// var a = 20
// console.log(a)
// var b = 30.33
// console.log(b)
// console.log(typeof(b))

// String
// var a = 'Ajay'
// console.log(a)
// var b = '20'
// console.log(b)
// console.log(typeof(b))
// var b = "Prashant"
// console.log(b)
// console.log(typeof(b))
// var c = '20'
// console.log(typeof(c)) // 
// Boolean

// var a = true
// console.log(a)
// console.log(typeof(a))
// Undefine
// var a;
// console.log(a)
// console.log(typeof(a))

// null

// var b = null
// console.log(b)
// console.log(typeof(b))


// var a = 20, b = 30
//   a           +          b
//   operand   operator    operand

// var c = a+b;
// console.log(c)

// Operators
// Arithmetic Operator

// +
// var num1 = 30, num2 = 401
// var c = num1+num2
// console.log(c)
// console.log(num1+num2)
// // -
// console.log(num2-num1)
// // *
// console.log(num1*num2)
// // /
// console.log(num2/num1)
// // **
// console.log(num1**2)


// // %
// console.log(num2%num1)




// var a = '20'
// var b = '30'
// var a = 20, b = '30'
// console.log(a+b)
// console.log(a-b)




// Asingment Operator 
// var d = 30
// Sort Hand Operator
// var a = 20, b = 30
// // a = a + b;
// a += b
// console.log(a)

// Increment and Decrement

// Pre Increment and Decrement
// var a = 20, b = 25;
// ++a;
// --b;
// console.log(a,b)  // a= 21, b = 24
// console.log(' Pre increment',++a) // 22, 23
// console.log(' Pre Decrement',--b)
// // Post Increment and Decrement
// var c = 22, d = 35
// c++;
// d--;
// console.log(c,d) // c = 23, d = 34
// console.log(' Post increment',c++) // 23, 34
// console.log(' Post Decrement',d--)
// console.log(c,d)





// Comparision Operator
//  >
// var a = 40, b = 40
// console.log(a > b)
//  <
// console.log(a < b)
//  >=
// console.log( a >= b)
//  <=
// console.log( a <= b)
//  ==
// console.log(a == b) // true
// console.log( a === b)  // false
// !=
// console.log(a != b)


// console.log(4+2 === 6)
// console.log(0.4+0.2)
// console.log(0.4+0.2 == 0.6)
// console.log(4.3+4.7)






// Logical Operator
// &&  => AND
// var a = 15, b = 20, c = 10
// console.log(a > b && a > c)
// || => OR
// console.log(a > b || a > c)
// ! => NOT
// console.log(!(a > b))



// Conditional Operator // Ternary Operator

// condition ? true:false
// var num = 22
// (num%2==0) ? "Even":'Odd'
// console.log((num%2==0) ? "Even":'Odd')
// console.log((num%2==0) ? "Even":'')
// var a = 20, b = 30, c = 10;
// console.log(a>b ? 'A is greater':'B is greater')
// console.log(a>b ? a>c ? 'A is greater':'Not Greater')





// Control Statement
// if, else,
// switch, loops

// if
// if(condition){
//     // statement
// }
//  var a = 20, b = 30, c= 60
//  if(a > b){
//     console.log('Hello')
//  }else if(c > b){
//     console.log('Give Some Money')
//  }else{
//     console.log('Welcome')
//  }

//  var num = -20

//  if(num%2 === 0){
//     console.log('Even')
//  }else{
//     console.log('Odd')
//  }


// if(num > 0){
//     if(num%2 === 0){
//         console.log('Even')
//     }else{
//         console.log('Odd')
//     }
    
// }else{
//     console.log('Please Enter Valid Number')
// }

// Number()
// var a = Number(prompt('Enter A Number '))
// console.log(a)
// console.log(typeof(a))


// switch()
// var day = Number(prompt('Enter a Number'))
// if(day === 1){
//     console.log('Mon')
// }else if(day === 2){
//     console.log('Tue')
// }else if(day === 3){
//     console.log('Wed')
// }
// var day = Number(prompt('Enter a Number'))

// switch(day){
//     case 1:
//         console.log('Mon')
//         break;
//     case 2:
//         console.log('tue')
//         break;
//     case 3:
//         console.log('Wed')
//         break;
//     case 4:
//         console.log('Thur')
//         break;
//     case 5: 
//         console.log('Fry')
//         break;
//     case 6:
//         console.log('Sat')
//         break;
//     case 7:
//         console.log('Sun')
//         break;
//     default :
//     console.log('Invalid Case')

// }


// Basic Loop
// while loop   => Entry Control Loop
// while(condition){
//     // block of statement
// }

// var num = 11;
// console.log('hello')
// while(num < 10){
//     console.log('Hello')
//     num++;
// }
// while(num <= 10){
//     console.log(num)
//     num++
// }

// do{
//     // block of statement
// }while(condition)  // => exit control loop
// do{
//     console.log(num)
//     num++
// }while(num <= 10)



// do while loop
// for loop
// for(initialized; condition; incre/decrement){
//     // block of statement
// }
// for(var num = 0; num < 10; num++){
//     // block of statement
//     console.log(num)
//     console.log('Hello')
// }


// for(var num = 1; num <= 100; num++){
//     if(num%2 === 0){
//         console.log(num)
//     }
// }
// var num = 1;
// while(num <= 10){
//     if(num%2 === 0){
//         console.log(num)
//     }
//     num++
// }

// Type  conversion
// for Number
// Number()

// var a = '20'
// var b = Number(a)
// a.Number()
// console.log(a)
// console.log(b)
// console.log(typeof(a))
// var num1 = Number(prompt('Enter Number'))
// console.log(num1)
// console.log(typeof(num1))

// parseInt()
// var num2 = parseInt(prompt('Enter Integer Num')) // 3
// console.log(num2)
// console.log(typeof(num2))
// parseFloat()
// var num3 = parseFloat(prompt('Enter Number')) //3.67
// console.log(num3)
// console.log(typeof(num3))





//  2. Non-Primitive Data Type



// var arr = [2, 7, 1, 8, 4, 9, 'Ajay', 3.6, 'Sachin', 10]
// console.log(arr)
// console.log(arr[3])
// console.log(arr[6])

// console.log(arr.length)
// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// var arr2 = [2, 8, 1, 9, 10]
//  sum = 2+8+1+9
// sum = 0, 2, 10, 11, 20;
// sum = sum + arr2[3]
// var sum = 0;
// for(var i = 0; i < arr2.length; i++){
//     sum = sum + arr2[i]
// }
// console.log(sum)



// var arr = [10, 30, 15, 17]
// arr.push(40)
// arr.push(10)
// arr.push('Sachin')
// var a = 20 
// arr.push(a)
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()


// arr.slice(start, end)
// var b = arr.slice(4, 6)
// console.log(b)

// console.log(arr)


// var arr = [20, 10, 30, 15, 18, 38]
        // -6, -5, -4, -3, -2, -1
// var b = arr.slice(-5, -2)
// var b = arr.slice(2)
// console.log(b)
// var a = 'this is my name'
// var b = a.slice(0, 7) 
// console.log(b)


// var arr = [20, 10, 30, 15, 18, 38]

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i], i)
// }


// arr.forEach((value)=>{
//     console.log(value)
// })
// arr.forEach(function(value){
//     console.log(value)
// })


// for(var x of arr){
//     console.log(x)
// }


// for(var x in arr){
//     console.log(x)
// }

// var x = 20
// console.log(x)

// var arr = [20, 30, 10, 5, 29, 60, 80, 2]

// var arr2 = [20, 30, 60]
// for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 20){
//                 console.log(arr[i])
//         }
// }

// var brr = arr.filter((num)=>{
//         return num > 20;
// })
// console.log(brr)

// arr.reduce()
// var sum = 0;
// for(var i = 0; i < arr.length; i++){
//         sum = sum + arr[i]

// }
// console.log(sum)


// var b = arr.reduce((a1, a2)=>{
//         return a1+a2;
// })
// var c = arr2.reduce((a, b)=>{return a+b})
// console.log(c)
// var arr = [20, 30, 10, 5, 29, 60, 80, 2]

// var a = arr.map((value)=>{
//         return value
// })
// console.log(a)



// var a = 20
// var a = 30
// a = 50
// console.log(a)
// let b = 30
// b = 40
// // let b = 10
// console.log(b)
// const c = 25
// c = 30
// console.log(c)
 // Object

//  var obj = {
//         Name : 'Rajat',
//         Age : 20,
//         Gender : 'Male',
//         Blood : 'O+'
//  }
//  console.log(obj)
//  console.log(obj.Name)
//  console.log(obj.Blood)

// //  let b = [{},{},{}, []]
// let arr = [20, {Name : 'Ajay', Age : 20}, 30, 'Sachin', [20, 30, 40], 5]
// console.log(arr)
// console.log(arr[4][2])
// console.log(console)

// let obj = {
//         Name : 'Rajat',
//         print : function(){
//                 console.log('Hello')
//         }
// }
// obj.print()


// let Student = {}

// Student['Name'] = 'Ajay'
// Student['Age'] = 29
// Student.Gender = 'Male'
// Student.Course = 'React Js'
// console.log(Student)


// var a = [20, 30, 10, 40, 50]
// a.forEach((value, index, array)=>{
//         console.log(value, index, array)

// })
// var b = a.filter((value)=>{
//         return value > 10;

// })
// console.log(b)

// var b = a.reduce((a, b)=>{
//         return a+b;
// })
// console.log(b)

// for(var x in a){
//         console.log(a[x])
// }

// for(var value of a){
//         console.log(value)
// }


// Function 

// function functionName(){ // Function Definition
//         // block of logic
// }

// functionName()  // Function Call / Function Invoke
// // console.log()

// function Hello(){
//         console.log('Hello Fun')
// }

// Hello()
// Hello()


// 1. Function Without Parameter and Without Retrurning Value

// function addNum(){
//         var a = 20, b = 30
//         var result;
//         result = a+b;
//         console.log('Sum of a and b is : ',result)
// }

// addNum()
// addNum()

// 2. Function With Parameter and Without Retrurning Value

// function addNum(a, b){
//         var result = a+b;
//         console.log(result)

// }

// addNum(20, 30)
// addNum(40, 60)
// var a = 50, b = 30
// addNum(a, b)

// 3. Function Without Parameter and With Retrurning Value

// function addNum(){
//         var a = 30, b = 10
//         var result;
//         result = a+b;
//         return result
// }
// // console.log(addNum())
// var a = addNum()
// console.log(a)
// 4. Function With Parameter and With Retrurning Value

// function addNum(a, b){
//         var result = a+b;
//         return result
// }
// var c = addNum(15, 25)
// console.log(c)
// d = 20
// console.log(d)


// function arraySum(arr){
//         // console.log(arr)
//         let sum = 0;
//         for(var i = 0; i < arr.length; i++){
//                 sum = sum + arr[i]
//         }
//         console.log(sum)

// }


// arraySum([20, 30, 10, 40, 50])
// arraySum([2, 8, 1, 9])
// let arr = [prompt('Enter Num'), prompt('Enter Num')]
// console.log(arr)
// [20, 20, 20, 20, 20]
// [1, 1, 1, 1]



// function checkIdentical(arr){
//         let first = arr[0]
//         let isIndentical = true
//         for(let i = 1; i < arr.length; i++){
//                 if(first != arr[i]){
//                         isIndentical = false
//                         break;
//                 }
//         }
//         if(isIndentical){
//                 console.log('Array is identical')
//         }else{
//                 console.log('Array is not Identical')
//         }
// }
// checkIdentical([20, 20, 20, 20, 20])
// checkIdentical([20, 30, 10, 40, 20])



// Arrow Function // Fat Arrow Function

// const addNum = () =>{
//         console.log('Arrow Function.......')
// }
// addNum()

// const Hello = () => {
//         console.log('Hello Arrow Function')
// }
// Hello()
// const Hi = () => console.log('Hi Single Statement Function')
// Hi()


// Function Expression
// const Hello = function(){
//         console.log('Hello')
// }
// Hello()

// Anonymouse
// function(){
//         console.log('Hello')
// }


// const Student = {
//         Name  : 'Sachin',
//         Age : 27,
//         Gender : 'Male',
//         Course : 'JavaScript',
//         Fee : '999 Rs.',
//         printDetails : function(){
//                 console.log(this.Name)
//         }
// }
// Student.printDetails()
// console.log(Student.Name)







