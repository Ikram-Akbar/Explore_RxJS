"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const myObservable = new rxjs_1.Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    setTimeout(() => {
        subscriber.next(3);
        subscriber.next(4);
    }, 3000);
});
console.log("before the subscriber");
// now call the myObservable for call subscribe;
// it will take an oject , in the object we can send 3 function 
// 1: next (val){} - 2: error(err){} 3: complete(){}
myObservable.subscribe({
    next(val) {
        console.log("the value of next : " + val);
    },
    error(err) {
        console.log("something were going wrong: " + err);
    },
    complete() {
        console.log("task has been complete");
    }
});
console.log("after the subscription");
