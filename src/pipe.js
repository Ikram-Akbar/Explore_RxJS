"use strict";
// Pipe
/*

The JavaScript Pipeline Operator ( |> ) is used to pipe the value of an expression into a function. This operator makes chained functions more readable. This function is called using ( |> ) operator and whatever value is used on the pipeline operator is passed as an argument to the function.

*/
// JavaScript Code (main.js)
function add(x) {
    return x + 10;
}
function subtract(x) {
    return x - 5;
}
// Without pipeline operator
let val1 = add(subtract(add(subtract(10))));
console.log(val1);
// Using pipeline operator
// First 10 is passed as argument to subtract
// function then returned value is passed to
// add function then value we get is passed to
// subtract and then the value we get is again
// passed to add function
//  let val2 = 10 |> subtract |> add |> subtract |> add;
//   console.log(val2);
