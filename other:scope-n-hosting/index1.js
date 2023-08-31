// 1. Basic Understanding of Hoisting
// console.log(a); // What will be the output? var a = 5;
// var a = 5; = undefined

// console.log(b); // What will be the output? let b = 5;
// let b = 5; = can't access before initialization

// console.log(c); // What will be the output? const c = 5;
// const c = 5; = can't access before initialization
//--------------------------------------------------------
// 2. Understanding Function Hoisting
// Given those two functions, one with a function declaration and another one with a function expression,
// if we try to call both functions before they are defined, what would be the outputs?

// function 1:
// console.log(myFuncDecl()); // What will be the output?
// function myFuncDecl() {
//   return "Hello from function declaration!";
// }

// "Hello from function declaration!"

// function 2:
// console.log(myFuncDecl()); // What will be the output?
// var myFuncExpr = function() {
//   return "Hello from function declaration!";
// };

// not defined function (?)
//--------------------------------------------------------
// 3. Nested Scopes and Hoisting
// Given this program with a function inside another function, write what do you think would be the output in each console statement.
const x = "global";
function outerFunc() {
  let y = "outer";
  function innerFunc() {
    var z = "inner";
    console.log(x); // What will be the output? "global"
    console.log(y); // What will be the output? "outer"
  }
  innerFunc();
  console.log(z); // What will be the output? not defined
}
outerFunc();
//--------------------------------------------------------
// 4. Combining All Concepts
// Given this code, what would be the output of the console statements and the function
// calls?
const a = 1;
function b() {
  const a = 10;
  c();
  return;
  function c() {
    console.log(a); // What will be the output? 10
  }
  b();
  console.log(a); // What will be the output of a? 1
  foo();
  function foo() {
    console.log(x); // What will be the output? undefined
    var x = "Hello, world!";
    bar();
    function bar() {
      console.log(x); // What will be the output? reference error
      let x = "Hello, scope!";
    }
  }
}
//--------------------------------------------------------
