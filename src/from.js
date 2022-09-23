"use strict";
// signature:
/**
 * from(ish:ObservableInput, mapFn:Function, thisArg:any, scheduler:Scheduler):Observable
 */
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// Example 1: Observable from array
const newArray = (0, rxjs_1.from)([1, 2, 3, 4, 5]);
// const subscribe = newArray.subscribe(val => console.log(val))
// Example 2: Observable from promise
const newPromise = (0, rxjs_1.from)(new Promise(resolve => resolve("Hello ESS")));
// const subscribe = newPromise.subscribe((val)=>console.log(val))
// Example 4: Observable from string
const obsString = (0, rxjs_1.from)("Hello from ESS");
// const subscribe = obsString.subscribe((value)=>{console.log(value)});
//output: 'H','e','l','l','o',' ' ,'f','r','o','m','' ,'E','S','S'
