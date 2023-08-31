// 1. Question: Which of the following correctly describes the difference between var , let , and const ?
// b) var declarations are hoisted and initialized as undefined . let and const declarations are hoisted but not initialized.
// OR
// d) var declarations are hoisted and initialized as undefined . let and declarations are not hoisted.
// ------------------------------------------------------------------------------------------
// 2. Question: What will be the output of the following code snippet?
// console.log(x);
// let x = 5;
// ReferenceError
// ------------------------------------------------------------------------------------------
// .3 Question: If a variable declared with let or const is hoisted, why can't we use it before the declaration?
// they still in the temporal dead zone
// ------------------------------------------------------------------------------------------
// 4. Question: What will be the output of the following code snippet? b) 2 1
// let x = 1;
// {
//   let x = 2;
//   console.log(x); // 2
// }
// console.log(x); // 1
// ------------------------------------------------------------------------------------------
// 5. Question: What will be the output of the following code snippet? d) error?
// const x = 1;
// function example() {
//   console.log(x);
//   const x = 2;
// }
// example();
// ------------------------------------------------------------------------------------------
// // 6. Question: What will be the output of the following code snippet?
// let a = "global";
// function checkScope() {
//   let a = "local";
//   function nested() {
//     let a = "nested";
//     function superNested() {
//       a = "superNested";
//       return a;
//     }
//     return superNested();
//   }
//   return nested();
// }
// console.log(checkScope());
// console.log(a);
// ------------------------------------------------------------------------------------------
// 7. Question: Which of the following statements about let and const are true?
// a) Variables declared with let and const are block-scoped.
// b) Variables declared with let can be updated but not re-declared in the same scope.
// c) Variables declared with const must be initialized during declaration.
// d) All of the above. <----- !!!!!
