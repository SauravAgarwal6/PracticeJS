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
// str[0] = "X";
// console.log(str); // immutable, cannot change

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

// // `` using backticks we can write multi-line strings and we can use string interpolation using ${}
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
// // let c ;//! Cannot redeclare
// d = 300
// console.log(d); // 300
// // let d = 400 //! Cannot redeclare and reinitialize

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
// // console.log(y); //! ReferenceError: y is not defined

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

//! Closure is
// function parent() {
//   console.log("I am Parent");

//   function child() {
//     console.log("I am Child");
//   }

//   child();
// }

// parent();

// debugger;
// function parent() {
//   let a1 =100;
//   console.log("I am Parent");

//   function child() {
//     let b1= 200;
//     console.log("I am Child",a1 , b1);
//   }

//   return child;
// }

// let val = parent();
// console.log(val);
// val();

//! 7) Higher Order Function and Call Back Function
//- A function which passes as an argument to another function is known as CallBack Function
//- A Function which passes any of these requirement
// 1) if a function accepts another function as an argument is known as HOF

// function demo(fn){
//   fn();
// }
// demo(function(){
//   console.log("Hello")
// })

// 2) if a function return another function .

// function parent() {
//   return  function child() {
//     console.log("I am Child");
//   }

// }

// let value = parent();
// value();

// function Demo1(){
//   console.log("Demo1")
//   return function demo2(){
//     console.log("Demo2")
//   }
// }
// Demo1()();  // <--- Js Currying

// ! 8) Arrow Function ->
// let a1 = () => {
//   console.log("I am Arrow Function 1")
// }
// a1();

// //!If No Parameter we can replace () with _
// let a2 = _ =>{
//   console.log("I am Arraow Fuction 2")
// }
// a2();

// //! if having a only one parameter paranthesis is not mandatory
// let a3 = n1 => {
//     console.log("I am Arrow Function 3", n1)
// }
// a3(100);

// //!If having only one line of code currly braket is not mandatory
// let a4 = _ => console.log("I am Arraow Fuction 2")
// a4();

// //! Explicit return --> {} and return keyword maindatory
// let a5 = (n1,n2) =>{
//   return n1+n2
// }
// a5();

// //!Implicit return -->  {} and return keyword is not maindatory
// let a6 = (n1,n2) => n1+n2
// a6();

//! 9) Immediatly Invoked Function Expression (IIFE)

// let x = (function () {
//   console.log("I am a IIFE")
//   return "Hi";
// })();
// console.log(x)

// function demo(){
//   return "hii"
// }

//! Constructor function : Used to create objects

//! OBJECTS : It is used to store multiple data in the form of key and value pairs
// 3:-  Ways to create Object

//!  1)object Literals
// const obj1 ={
//   id : 1,
//   fname : "Saurav",
// };
// console.log(obj1)
//!  2) object contructor
// const obj2 = new Object({id : 1, fname : "Saurav",});
// console.log(obj2)
//!  3) constructor function
// function Student(id,firstName){
//   this.id = id
//   this.firstName = firstName
// }
// let s1 = new Student(1,"James");
// console.log(first)

//! Crud With Object

//! Create
// const obj  ={
//   id:1,
//   fname : "jones",
//   lname : "Doe",
//   age : 25,
//   company : "NA"
// }
// console.log(obj)
// //! 2)Read
// //! there are 2 ways to read
// //! 1) using dot operator

// console.log(obj.fname) //Jones
// console.log(obj.degree) //UD
// //!  2) using square bracket

// let x = "lname"
// console.log(obj["age"])
// console.log(obj[x])

// //!for Loop
// let array = [10,20,30];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   console.log(element)

// }

// //!for in loop
// for (let  i in obj ){
//   console.log(obj[i])
// }

// //! Update
// obj.company ="TCS";
// obj.salary =60000;
// for (let  i in obj ){
//   console.log(obj[i])
// }
// console.log(obj)

// //! Delete
// delete obj.salary
// console.log(obj)

//! Object methods

// let obj = {
//   id: 1,
//   ename : "Jones Doe"
// }
// //! 1) Object.keys()
// let keys = Object.keys(obj)
// console.log(keys) //['id', 'ename']

// //! 2)Object.Values()
// let values = Object.values(obj)
// console.log(values) // [1, 'Jones Doe']
// //! 3) Object.entries()
// let keyAndValue = Object.entries(obj)
// console.log(keyAndValue); // [ ['id', 1]], ['ename', 'Jones Doe']]
// //! 4) Object.fromEntries
// let newObj = Object.fromEntries(keyAndValue)
// console.log(newObj) //{id: 1, ename: 'Jones Doe'}

// let obj2 = {
//   id:2,
//   name : {
//     firstName : "Jane",
//     lastName : "Doe",
//   },
//   hobbies: ["Coding", "Singing", "dancing"],
//   address : {
//     city : "Noida",
//     state : "UP",
//     pin : 876541,
//   },
// };
// console.log(obj2.name.firstName);

// ! Object Destructuring
// let obj1 = {
//   id:1,
//   fname:"john",
//   lname:"Doe"
// }
// let {id, lname,fname:firstName = "NA",salary =0} =obj1;
// console.log(firstName)
// console.log(lname)
// console.log(id)
// console.log(salary)

// let obj2 = {
//   id:2,
//   Name : {
//     firstName : "Jane",
//     lastName : "Doe",
//   },
//   hobbies: ["Coding", "Singing", "dancing"],
//   address : {
//     city : "Noida",
//     state : "UP",
//     pin : 876541,
//   },
//   details:{
//     id:"JaneQSP1",
//     course:"Mern Stack",
//   }
// };

// let{
//   id,
//   Name: {firstName},
//   hobbies:[, ,h1],
//   address:{city},
//   details:{id:detailsID, course},
// }=obj2;

// console.log("Name is ",firstName)
// console.log(id)
// console.log(h1)
// console.log(city)
// console.log(course)
// console.log(detailsID)

// //! Array Destructuring
// let arr = [10, 20 , 30, 40 ,50];
// let [,n1,n2,]= arr;
// console.log(n1)
// console.log(arr)

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

// name, username,street,zipcode,lat, lng, companyname
let {
  name:Name,
  username,
  address: {
    street,
    zipcode,
    geo: { lat, lng },
  },
  company: { name: companyName },
} = user;
console.log(Name)
console.log(username)
console.log(street)
console.log(zipcode)
console.log(lat)
console.log(lng)
console.log(companyName)
