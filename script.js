//! TYPES OF PRINTING STATEMENTS

// console.log("External JS")

// document.writeln("<i>Hello</i>")
// document.writeln("<b>Hello</b>")
// document.writeln("Hello")
// document.writeln("Hello")
// document.writeln("Hello")

// document.write("World")
// document.write("World")
// document.write("World")
// document.write("World")
// document.write("World")

//! TOKENS : smallest unit of any programming lang
/*
THERE ARE 4 TYPES OF TOKENS

1) Keywords: reserved words which has specific meaning 
 - Example :- var, let, const, for, if ,etc...

2) Identifiers : name given to a class, methods, variables are known as identifier

3) Literals / Values : a value stored in a variable is known as literals

4) Operators : to perform operation between two or more operands

EXAMPLE :  var name = "John Doe"
*/

/*
! WE HAVE 2 TYPES OF DATATYPES
1) PRIMITIVE  -> IMMUTABLE

- In primitive there are 7 types:

1) number
2) string
3) boolean
4) undefined
5) null
6) bigInt
7) symbol


2) NON-PRIMITIVE -> MUTABLE

- There are 3 types

1) array
2) object
3) function
*/

//! MUTABLE AND IMMUTABLE EXAMPLE

// var str = "HELLO";
// console.log(str[0])// H
// console.log(str[0] = "X") ;
// console.log(str); // immutable, cannot change
// str = "Xello"
// console.log(str)

// var arr = [10, 20, 30, 40, 50];
// arr[0] = 100;
// console.log(arr); // mutable, can change

//! PRIMITIVE DATA TYPES EXAMPLES

// var n1 = 10.987;
// console.log(n1); // 10.987
// console.log(typeof n1); // number

// var n2 = "Hello";
// var n3 = "World";
// console.log(n2, n3); // Hello World
// console.log(typeof n3); // string

// `` using backticks we can write multi-line strings and we can use string interpolation using ${}
// var n4 = `Hey There !!!
// Lets go to javascript ${n3} `;
// console.log(n4);
// console.log(typeof n4);

// var n5 = true;
// console.log(n5); // true
// console.log(typeof n5); // boolean

// console.log(typeof typeof n5); // string

// var n6 = undefined;
// console.log(n6); // undefined
// console.log(typeof n6); // undefined

// var n7 = null;
// console.log(n7); // null
// console.log(typeof n7); // object

// var n8 = 9n;
// console.log(n8); // 9n
// console.log(typeof n8); // bigint

// var n9 = Symbol("hello");
// var n10 = Symbol("hello");

// console.log(n9); // Symbol(hello)
// console.log(n10); // Symbol(hello)

// console.log(n9 == n10); // false
// console.log(n9 === n10); // false

// //! STRICTLY AND LOOSLY COMPARISION
// var n11 = 10;
// var n12 = "10";
// console.log(n11 == n12); // true
// console.log(n11 === n12); // false

// //! VAR , LET AND CONST DIFFERENCE

// var a;
// console.log(a); // ud
// a = 10;
// console.log(a); // 10
// var b = 20
// console.log(b); // 20
// var b;
// console.log(b); // 20
// b = 30
// console.log(b); // 30
// var a = 40
// console.log(a); // 40

// let c;
// console.log(c); // ud
// c = 100
// console.log(c); // 100
// let d = 200
// console.log(d); // 200
//! // let c ;//! Cannot redeclare
// d = 300
// console.log(d); // 300
//! // let d = 400 //! Cannot redeclare and reinitialize

// //! declare and initialize at same time
// const e = 1000
// console.log(e); // 1000

//! HOISTING : moving declaration part at the top of the original code internally

// var a = undefined <--- hoisting happens internally
// console.log(a);
// var a = 10
// console.log(a); // 10

//! TDZ (TEMPORAL DEAD ZONE) : the time period between accessing let and const variable before declaration

// let b
// console.log(b);//! error -> Cannot access 'b' before initialization
// let b = 20
// console.log(b); // 20

// let c  <--- hoisted but value will be unavailable
// console.log(c); //! error -> Cannot access 'c' before initialization
// let c;
// console.log(c);// ud

//! GEC (GLOBAL EXECUTION CONTEXT)
// debugger;
// console.log("Start");
// console.log(a);
// var a = 10
// console.log(a);
// let b;
// console.log(b);
// b = 20
// const c = 100
// console.log(c);
// console.log("End");

// ! TYPES OF VARIABLES AND ITS SCOPE

// ! 1) GLOBAL VARIABLES : can be accessed anywhere throughout the code
// var a = 10; // GLOBAL SCOPE <- DUE TO HOISTING
// let b = 20;  // SCRIPT SCOPE <- DUE TO TDZ
// const c = 30; // SCRIPT SCOPE <- DUE TO TDZ

// if (100 > 2) {
//   console.log(a, b, c);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(a, b, c );
// }

// function demo1() {
//   console.log(a, b, c);
// }
// demo1();

//! 2) LOCAL VARIABLES : Variables which can be accessced within a block.
// if (100 > 2) {
//   var x = 10; // GLOBAL VARIABLE - GLOBAL SCOPE
//   let y = 20; // LOCAL VARIABLE - BLOCK SCOPE
//   const z = 30; // LOCAL VARIABLE - BLOCK SCOPE
// }
// console.log(x); // 10
//! // console.log(y); //! ReferenceError: y is not defined

// for (let i = 0; i < 5; i++) {}

//! NOTE : var variables are also known as function scope variable because it acts like local variable within a function

// function demo2() {
//   var m = 100; // LOCAL VARIABLE - LOCAL SCOPE
//   let n = 200; // LOCAL VARIABLE - LOCAL SCOPE
//   const o = 300; // LOCAL VARIABLE - LOCAL SCOPE
// }
// demo2();
// console.log(m); //!  ReferenceError: m is not defined

//! FUNCTIONS

// ! 1) NAMED FUNCTION : a function which has name
// ! NOTE : only Named Function can be called before declaration due to function hoisting

// debugger
// greet()

// function greet() {
//   console.log("Welcome");
// }

// greet()

//! GEC
// console.log("Start");
// var a;
// console.log(a);
// fun();
// a = 10;
// console.log(fun);
// function fun() {
//   var str = "Hello";
//   console.log(str);
// }
// console.log(fun);
// fun();
// console.log("End");

// console.log("start");
// console.log(student);
// var s1 = 100;
// function student() {
//   console.log("I am student");
// }
// console.log(trainer);
// let s2 = 200;
// console.log(s2);
// function trainer() {
//   console.log("I am trainer");
// }
// student();
// trainer();
// console.log("End");

//! 2) ANONYMOUS FUNCTION : function without name
// function () {
//   console.log("I am Anonymous function");
// }

//! 3) FUNCTION EXPRESSION : its is used to call/invoke anonymous function

// console.log(f1);// ud
// // f1()

// var f1 = function () {
//   console.log("I am Anonymous function called by using Function expression");
// };
// console.log(f1);// it will print function with body
// f1() // it will call the function

//! 4) PARAMETERIZED FUNCTION
// function sum(n1 = 0, n2 = 0) {
//   console.log(n1 + n2);
// }
// sum(10, 20);
// sum();

// function demo1(n1, n2, n3, n4, n5) {
//   console.log(n1, n2, n3, n4, n5);
//   console.log(arguments);
// }
// // demo1(10, 20, 30, 40, 50);
// // demo1(10, 20);
// demo1(10, 20, 30, 40, 50, 60, 70, 80, 90);

// function printFullName(firstName, lastName , age) {
//   console.log(`My Name is ${firstName} ${lastName} ${age}`);
//   console.log("My age is", age);

// }
// let firstNameInput = prompt("Enter FirstName");
// let lastNameInput = prompt("Enter LastName");
// let ageInput = parseInt(prompt("Enter Age"));

// printFullName(firstNameInput, lastNameInput , ageInput);

//! 5) RETURN TYPE FUNCTION
// function getEmail(fname, lname) {
//   let fullName = `${fname} ${lname}`;
//   let email = `${fname}.${lname}@gmail.com`;

//   return [fullName, email];
// }

// let value = getEmail("john", "doe");
// console.log(value[0]);
// console.log(value[1]);

//! 6) NESTED FUNCTION
// function parent() {
//   console.log("I am Parent");

//   function child() {
//     console.log("I am Child");
//   }

//   child();
// }

// parent();

//! Closure is a temporary memory which is created whenever we try to access paraent function's property inside child function and it contains only those properties that child function required.

// debugger
// function parent() {
//   let a1 = 100;
//   console.log("I am Parent", a1);

//   function child() {
//     let b1 = 200;
//     console.log("I am Child", b1, a1); // we can access a1, due to closure
//   }
//   child();
// }
// parent();

// debugger;
// function parent() {
//   let a1 = 100;
//   console.log("I am Parent", a1);

//   function child() {
//     let b1 = 200;
//     console.log("I am Child", b1, a1);
//   }

//   return child;
// }

// let val = parent();
// console.log(val);
// val();

//! 7) HIGHER ORDER FUNCTION AND CALLBACK FUNCTION
// - A function which passes as an arguement to another function is known as Callback Function

// - A function which passes any of these requirements
// 1) if a function accepts another function as an arguement is known as HOF
// function demo(fn) {
//   fn();
// }
// demo(function () {
//   console.log("Hii");
// });

//! // 2) if a function returns another function is known as HOF
// function Parent() {
//   return function Child() {
//     console.log("Hello");
//   };
// }
// let val = Parent();
// val();

// function Demo1() {
//   console.log("Demo 1");
//   return function Demo2() {
//     console.log("Demo 2");
//     return function Demo3() {
//       console.log("Demo 3");
//     };
//   };
// }
// Demo1()()(); // <--- JS CURRYING

//! 8) ARROW FUNCTION
// let a1 = () => {
//   console.log("I am Arrow function 1");
// };
// a1();

// // if no parameter, we can replace () with _
// let a2 = (_) => {
//   console.log("I am Arrow function 2");
// };
// a2();

// // if having only one parameter, () is not mandatory
// let a3 = (n1) => {
//   console.log("I am Arrow function 3", n1);
// };
// a3(100);

// // if having only one line of code {} is not mandatory
// let a4 = () => console.log("I am Arrow function 4");
// a4();

// // explicit return, {} and "return" keyword is mandatory
// let a5 = (n1, n2) => {
//   return n1 + n2;
// };
// console.log(a5(10, 20));

// // implicit return , {} and "return" keyword is not required
// let a6 = (n1, n2) => n1 + n2;
// console.log(a6(5, 10));

//! 9) IMMEDIATLY INVOCKED FUNCTION EXPRESSION ( IIFE )
// let x = (function () {
//   console.log("I am IIFE");
//   return "Hii";
// })();
// console.log(x); // Hii

// function demo() {
//   return "Hi";
// }
// let val = demo();

//! 10) CONSTRUCTOR FUNCTION : used to create objects

//! OBJECTS : it is used to store multiple data in the form of key and value pairs
// There are 3 ways to create object:-
// //! 1) Object literals
// const obj1 = { id: 1, fname: "John" };
// console.log(obj1);

// //! 2) Object Constructor
// const obj2 = new Object({ id: 2, fname: "Jane" });
// console.log(obj2);

// //! 3) Constructor Function
// function Student(id, firstName) {
//   this.id = id;
//   this.firstName = firstName;
// }
// let s1 = new Student(1, "James");
// console.log(s1);
// let s2 = new Student(2, "Clark");
// console.log(s2);

//! CRUD WITH OBJECTS

// //! 1) CREATE
// const obj = {
//   id: 1,
//   fname: "John",
//   lname: "Doe",
//   age: 25,
//   company: "NA",
// };
// console.log(obj);

// //! 2) READ
// // there are 2 ways to read
// // 1) using dot operator

// console.log(obj.fname); // John
// console.log(obj.degree); // ud

// // 2) using square brackets

// let x = "lname";
// console.log(obj["age"]); // 25
// console.log(obj[x]); // Doe

// // for in loop
// for (let i in obj) {
//   console.log(i, obj[i]);
// }

// //! UPDATE
// obj.company = "TCS"
// console.log(obj);

// //! ADD NEW KEY
// obj.salary = 60000
// console.log(obj);

// //! DELETE
// delete obj.salary
// console.log(obj);

//! OBJECT METHODS
// let obj = {
//   id: 1,
//   ename: "John Doe",
// };

// //! 1) Object.keys()
// let keys = Object.keys(obj);
// console.log(keys); // ["id" , "ename"]

// //! 2) Object.values()
// let values = Object.values(obj);
// console.log(values); // [1 , "John Doe"]

// //! 3) Object.entries()
// let keyAndValue = Object.entries(obj);
// console.log(keyAndValue); // [ ["id" , 1]  , ["ename" , "John Doe"]]

// //! 4) Object.fromEntries()
// let newObj = Object.fromEntries(keyAndValue);
// console.log(newObj); // {id: 1, ename: 'John Doe'}

// let obj2 = {
//   id: 2,
//   name: {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   hobbies: ["coding", "singing", "dancing"],
//   address: {
//     city: "Noida",
//     state: "UP",
//     pin: 876541,
//   },
// };

// console.log(obj2.name.firstName); //  Jane
// console.log(obj2.hobbies[0]); // coding
// console.log(obj2.address.state); // UP

// ! OBJECT DESTRUCTURING

// let obj1 = {
//   id: 1,
//   fname: "John",
//   lname: "Doe",
// };

// let { fname: firstName = "NA", lname, id, salary = 0 } = obj1;

// console.log(firstName);
// console.log(lname);
// console.log(id);
// console.log(salary);

// let obj2 = {
//   id: 2,
//   Name: {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   hobbies: ["coding", "singing", "dancing"],
//   address: {
//     city: "Noida",
//     state: "UP",
//     pin: 876541,
//   },
//   details: {
//     id: "JaneQSP1",
//     course: "Mern Stack",
//   },
// };

// id,firstName,coding,city,id,course

// let {
//   id,
//   Name: { firstName },
//   hobbies: [, , h3],
//   address: { city },
//   details: { id: detailID, course },
// } = obj2;

// console.log(id, firstName, h3, city, detailID, course);

// //! ARRAY DESTRUCTURING
// let arr = [10, 20, 30, 40, 50];
// let [, n1, , n2] = arr;
// console.log(n1, n2);

// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };

// name ,username ,street ,zipcode ,lat , lng,companyName ,

// let {
//   name,
//   username,
//   address: {
//     street,
//     zipcode,
//     geo: { lat, lng },
//   },
//   company: { name: companyName },
// } = user;

//! "this" keyword

// console.log(window); // GLOBAL OBJECT
// console.log(this); // POINTS TO WINDOW OBJECT

// //! HOW TO CREATE YOUR OWN METHOD
// //! NOTE : DONT USE ARROW FUNC TO CREATE METHOD BCOZ "this" KEYWORD REFERS TO WINDOW OBJECT

// let student = {
//   id: 1,
//   fname: "john",
//   lname: "doe",
//   getFullName: function () {
//     console.log(`${this.fname} ${this.lname}`);
//   },
//   getEmail() {
//     console.log(`${this.fname}.${this.lname}@gmail.com`);
//   },
// };

// student.getFullName();
// student.getEmail();

//! call() , apply() and bind()

// function getFullName() {
//   return `${this.firstName} ${this.lastName}`;
// }

// function getCourseDetails(sub1, sub2) {
//   return `${this.course} includes ${sub1} ${sub2}`;
// }

// let user1 = {
//   id: 1,
//   firstName: "Jane",
//   lastName: "Doe",
//   course: "Mern Stack",
// };

// let user2 = {
//   id: 2,
//   firstName: "James",
//   lastName: "Carry",
//   course: "Java Full Stack",
// };

// console.log(user1);
// console.log(user2);

// //! call() : immediately calls the function
// let fullName1 = getFullName.call(user1);
// console.log(fullName1);

// let courseDetails1 = getCourseDetails.call(user1, "JS", "NodeJS");
// console.log(courseDetails1);

// //! apply() : immediately calls the function
// let fullName2 = getFullName.apply(user2);
// console.log(fullName2);

// let courseDetails2 = getCourseDetails.apply(user2, ["Java", "SpringBoot"]);
// console.log(courseDetails2);

// //! bind() : returns bounded function which can be called later on
// let boundedGetFullName = getFullName.bind(user1);
// console.log(boundedGetFullName());

// let boundedCouseDetails = getCourseDetails.bind(user1);
// console.log(boundedCouseDetails("HTML", "NODE JS"));

//! SCOPES REVISION

//!  - GLOBAL SCOPE AND SCRIPT SCOPE :
//  - WHENEVER WE DECLARE GLOBAL VARIABLES GLOBAL SCOPE AND SCRIPT SCOPE CREATES
//  - IN GLOBAL SCOPE WE CAN SEE "var" VARIABLES AND FUNCTION DECALRATIONS
//  - IN SCRIPT SCOPE WE CAN SEE "let" and "const" VARIABLES, DUE TO TDZ

//! - BLOCK SCOPE :
//  - WHENEVER WE DECLARE "let" AND "const" VARIABLES INSIDE CONDITIONAL OR LOOPING STATEMENT THOSE VARIABLES WILL ACT AS LOCAL VARIABLES AND HAVING BLOCK SCOPE
//! - NOTE: "var" VARIABLES WILL ACT AS GLOBAL VARIABLE AND HAVING GLOBAL SCOPE WITHIN CONDITIONAL OR LOOPING STATEMENT

//! - LOCAL SCOPE :
//  - WHENEVER WE DECLARE "var", "let" OR "const" VARIABLES INSIDE A FUNCTION , IT WILL ACT AS LOCAL VARIABLES HAVING LOCAL SCOPE

//! - FUNCTION SCOPE :
//  - "var" VARIABLES ARE KNOWN AS FUNCTION SCOPE VARIABLES BECOZ IT ACTS LIKE LOCAL VARIABLE INSIDE A FUNCTION

//! JAVASCRIPT OBJECT NOTATION (JSON)
// let user1 = {
//   id: 1,
//   fname: "John",
//   lname: "Doe",
// };

// function storeDataInLocalStorage() {
//   let jsonData = JSON.stringify(user1); // JS TO JSON
//   localStorage.setItem("usersData", jsonData);
// }

// function getDataFromLocalStorage() {
//   let data = localStorage.getItem("usersData");
//   let userObject = JSON.parse(data); // JSON TO JS
//   console.log(userObject);
//   document.writeln(`<em>${userObject.fname}</em>`);
// }

// function removeSingleDataFromLocalStorage() {
//   localStorage.removeItem("demo1");
// }

// function clearDataFromLocalStorage() {
//   localStorage.clear();
// }

//! ARRAYS : hetrogenous in nature

// 1) Array Literals
// let arr1 = [10, true, "Hello World", () => {}, null, 1n, undefined];
// console.log(arr1);

// 2) Array Constructor
// let arr2 = new Array(10, false, "Bye", function () {});
// console.log(arr2);

//! ARRAY METHODS
// let arr1 = [10, 20, 30, 40];
// console.log(arr1); // [10,20,30,40]

// //! array.push() : Appends new elements to the end of an array, and returns the new length of the array.

// let newLength = arr1.push(50, 60, 70);
// console.log(arr1); // [10,20,30,40,50, 60, 70]
// console.log(newLength); // 7 <-- new length of arr1

// //! array.pop() : Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// let retrunVal = arr1.pop();
// console.log(arr1); // [10,20,30,40,50, 60]
// console.log(retrunVal); // 70

// //! array.unshift()
// let newLength2 = arr1.unshift("Hello", 100);
// console.log(arr1); // ["Hello",100,10,20,30,40,50, 60]
// console.log(newLength2); // 8

// //! array.shift()
// let retrunVal2 = arr1.shift();
// console.log(arr1); // [100,10,20,30,40,50, 60]
// console.log(retrunVal2); // "Hello"

//! splice( startIndex , deleteCount , newElements)
// let arr2 = [100, 200, 300, 400];
// console.log(arr2); // [100, 200, 300, 400]

// //! ADD NEW ELEMENT
// arr2.splice(3, 0, 350);
// console.log(arr2); // [100, 200, 300, 350, 400]

// arr2.splice(2, 0, 250);
// console.log(arr2); //  [100, 200, 250, 300, 350, 400]

// //! DELETE ELEMENT
// arr2.splice(2, 3);
// console.log(arr2); // [100, 200, 400]

// let arr3 = [1000, 2000, 3000, 4000];
// arr3.splice(0, 3);
// console.log(arr3); // [4000]

// //! DELETE AND ADD
// let arr4 = [100, 200, 300, 400, 500, 600];
// arr4.splice(2, 2, 1000, 2000);
// console.log(arr4); // [100, 200, 1000, 2000, 500, 600]

// //! slice( startIndex, endIndex )
// //          -6  -5  -4  -3  -2  -1
// let arr5 = [10, 20, 30, 40, 50, 60];
// //           0   1   2   3   4   5
// console.log(arr5);

// let newArr1 = arr5.slice(1, 4);
// console.log(newArr1);

// let newArr2 = arr5.slice(2);
// console.log(newArr2);

// let newArr3 = arr5.slice(-2, 3);
// console.log(newArr3);

// ! sort()
// let arr6 = [9, 5, 2, 1, 0, 4, 7];
// arr6.sort(); // ASC
// console.log(arr6);

// LEXOGRAPHICAL SORTING
// let arr7 = [90, 5, 67, 45, 1, 78, 26];
// arr7.sort();
// console.log(arr7); //  [1, 26, 45, 5, 67, 78, 90]

// let arr8 = [80, 615, 49, 31, 10, 38];
// arr8.sort((a, b) => a - b);
// console.log(arr8); // [10, 31, 38, 49, 80, 615]

//! concat()
// let arr9 = [10, 20, 30];
// let arr10 = [40, 50, 60];
// let concatinatedArr = arr9.concat(arr10);
// console.log(concatinatedArr); // [10, 20, 30, 40, 50, 60]

// let arr = [1, 2, 3, 4, 5, 6];
// for (let index = -2; index < arr.length; index++) {
//   console.log(index , arr[index]);
// console.log(arr.slice(index));

// }
// console.log(arr[-2]);

// ! Advance Array Method

// let arr1 = [10, 20, 30, 40, 50];

//! for Each( callbackFunc ):- Performs the specified action for each element in an array.
// ! it not return any thing
// console.log("---------- For Each ---------")
// let returnForEach = arr1.forEach((element, index, array) => {
//   console.log(element, index, array);
//   return element + 5;
// });
// console.log(returnForEach);
// console.log("----------------------------------");

// //! map(callbackFunc ) :- Calls a defined callback function on each element of an array, and returns an new array that contains the results.
// console.log("---------- Map ---------------")

// let returnMap = arr1.map((element, index, array) => {
//   console.log(element, index, array);
//   return element + 5;
// });
// console.log(returnMap);
// console.log("-----------------------------");

// //! filter(callbackFunc ) :- Returns the elements of an array that meet the condition specified in a callback function.
// console.log("---------- Filter--------- ---------")

// let returnFilter = arr1.filter((element, index, array) => {
//   return element % 20 == 0;
// });
// console.log(returnFilter);

// //! find(callbackFunc ) :- Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// console.log("---------- Find-----------------")

// let returnFind = arr1.find((element, index, array) => {
//   return element >20; // output:- 30 a single value 
// });
// console.log(returnFind)
// console.log(arr1)


// //! findIndex(callbackFunc ) :- Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// console.log("---------- FindIndex----------------------")

// let returnFindIndex = arr1.findIndex((element, index, array) => {
//   return element >20; // output:- 30 a single value 
// });
// console.log(returnFindIndex)
// console.log(arr1)


// //! reduce( callbackFunc ) :- Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// console.log("---------- Reduce--------------------------")

// let arr4 = [10,20,30,40,50,60];
// let returnReduce = arr4.reduce((accumulator,element, index, array) => {
//   return accumulator+element; 
// },0);
// console.log(returnReduce)

//! toString() :- Returns a string representation of an array.
// let str1 = arr4.toString();
// console.log(str1);

//! join() :- Adds all the elements of an array into a string, separated by the specified separator string.
// let str2 = arr4.join(" a ")
// console.log(str2)

// //! split();
// let str4 = "hello";
// console.log(str4.split(""))


// function palindrome (word){
//   let output = word.split("").reverse().join("");
//   return output===word ? true : false;
// }
// console.log(palindrome("abcd"));
// console.log(palindrome("racecar"))

// Array Destructuring 
// let arr1 = [10,20,30,40,50];
// let [n1,n2,n3,n4,n5] = arr1;
// console.log(n1,n5)

// let arr2 = [100,200,300,400,500];
// Skiping the element while destructuring 
// let [,a1,,a2]=arr2;
// console.log(a1, a2, )

// Nested array 
// let arr3= [1000,2000,[3000,4000],5000];
// let [b1,,[,b2],b3]=arr3
// console.log(b1,b2,b3)

// Array of object 
// let arr4 = ["hello", {id:1 , fname:"john", lname:"Doe"}];
// let [s1, {fname}]=arr4
// console.log(s1, fname);

//! Rest and Spread Operators : ...variable
// rest
// function demo1(p1,p2,...p3){ // p3 store rest of the value after 20 and it must be in last 
//   console.log(p1,p2,p3)
//   console.log(arguments) //<- array like object , not pure array
// }
// demo1(10,20,30,40,50,60,70,80,90)
// let arr5 = [10,20,30,40,50,60,70,80,90];
// let [x1, ...x2]=arr5
// console.log(x1,x2) // x2 is <- rest operatrated

// !Spread is used for unpacking an array while rest is used for packing 
// let arr6 = [100,200,300,400,500];
// console.log(...arr6) 
// let arr7 = [...arr6];// <---copy elements
// console.log(arr7)// <--- Spread unpack 


// rest and spread in object 
// let obj1 = {
//   id:1,
//   fname:"jane"
// }
// let obj2 = {
//   ...obj1,
//   lname:"Doe"
// }

// console.log(obj1,obj2)

//! String Methods
// let str1 = "Saurav"
// console.log(`i am ${str1}`);

// let str = "java Script"

// Property
// console.log(str.length)
// console.log(str[0])

// //! String.slice(StratIndex,LastIndex+1);
// console.log(str.slice(0,4))
// console.log(str.slice(4))
// console.log(str.slice(-11,-6))
// console.log(str.slice(-6,11))

// let description  = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ducimus debitis at, architecto deserunt quisquam ratione voluptatem nulla soluta eum, necessitatibus repudiandae officia consectetur fugit aspernatur! Eaque, porro enim laboriosam fugit autem qui deleniti? Sed, porro numquam cumque consectetur aut molestias quasi obcaecati officiis ea reiciendis voluptatem eligendi rerum voluptate ipsam placeat necessitatibus itaque officia deleniti reprehenderit expedita incidunt accusantium veniam soluta? Velit maiores natus eius praesentium delectus aut voluptates. Blanditiis, non libero aspernatur hic rerum modi quaerat minima debitis ab? Ullam, quod quo explicabo placeat enim neque!"
// console.log(`${description.slice(0,51)}...`)

// //! String.substring(StratIndex,LastIndex+1); similar to slice but do not accept negative indexes
// console.log(str.substring(0,4));

// //! str.substr(startIndex , length);
// console.log(str.substr(0,4));


// let str2 = "i love python";
// console.log(str2.replace("python","JavaScript")); //i love JavaScript
// console.log(str2) //i love python

// let str3 = "i love Python. Python is Great";
// console.log(str3.replaceAll("Python", "JavaScript"))

// console.log("    saurav    ".trim())

// let phoneNo = "88466105445";
// console.log(phoneNo.slice(0,6).padEnd(10,"X"))
// console.log(phoneNo.slice(6).padStart(10,"X"))

// let str4 = "JavaScript"
// console.log(str4.charAt(3))

// //! Str.charCodeAt(i) for ascii of that character of the index
// console.log(str4.charCodeAt(0))

// //! str.toUpperCase();
// console.log(str4.toUpperCase())
// //! str.toLowerCase();
// console.log(str4.toLowerCase());

// console.log(str4.includes("Java"))

// console.log(str4.indexOf("a"))

// let str5 = "React is library of JavaScript"
// console.log(str5.split(" "))

//! TIMER FUNCTIONS

// //! setInterval( callback , intervalTime )
// let intervalID = setInterval(() => {
//   console.log("Hiii");
// }, 2000);

// console.log("IntervalID is", intervalID);

// //! setTimeout( callback , timeOut )
// setTimeout(() => {
//   console.log("Byee");
// }, 12000);

// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log("Interval Stopped");
// }, 8000);

//! PROMISE

// const p1 = new Promise((resolve, reject) => {
//   if (10 > 2) {
//     resolve("Hello World");
//   } else {
//     reject("Bye Bye");
//   }
// });

// console.log(p1);

// p1.then((data) => {
//   document.writeln(`<h3>${data}</h3>`);
// });

// p1.catch((err) => {
//   document.writeln(`<h3>${err}</h3>`);
// });

// p1.finally(() => {
//   console.log("I am finally block");
// });

//! PROMISE WITH THEN, CATCH AND FINALLY
// const API_URL = "https://dummyjson.com/todos";

// let p1 = fetch(API_URL);
// console.log(p1);

// /*
// Promise{
// Prototype: [[Promise]],
// PromiseState : "fullfilled",
// PromiseResult : Response
// }
// */

// p1.then((response) => {
//   let p2 = response.json();
//   console.log(p2);

//   p2.then((data) => {
//     console.log(data.todos);
//   });

//   p2.catch((err) => {
//     console.log(err);
//   });
// });

// p1.catch((err) => {
//   console.log(err);
// });

//! PROMISE WITH ASYNC AND AWAIT
// const API_URL = "https://dummyjson.com/todos";

// async function getTodos(url) {
//   try {
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data); // {todos: Array(30), total: 254, skip: 0, limit: 30}

//     displayTodos(data.todos); // Array(30)
//   } catch (err) {
//     console.log(err);
//   }
// }
// getTodos(API_URL);

// function displayTodos(allTodos) {
//   console.log(allTodos);

//   allTodos.forEach((ele) => {
//     let { id, userId, todo, completed } = ele;

//     document.writeln(`
//       <div class = 'todo'>
//         <h4>${todo}</h4>
//         <span>${completed ? "Completed" : "Pending"}</span>
//       </div>
//       `);
//   });
// }
