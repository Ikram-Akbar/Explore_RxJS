"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const observable = new rxjs_1.Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000);
});
console.log("just before subscribe ,");
// now declare the subscribes
observable.subscribe({
    next(m) {
        console.log("next func has got a value : " + m);
    },
    error(err) {
        console.log(`The error message is : ${err}`);
    },
    complete() {
        console.log(" task has been complete");
    }
});
console.log(" Just After the subscribe");
