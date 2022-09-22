"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const pureObservable = new rxjs_1.Observable(function subscribe(subscriber) {
    let newId = setInterval(() => {
        subscriber.next("Ikram Akbar");
    }, 1000);
    // return function unsubscribe() {
    //    Disposing 
    // }
    // console.log(id);
});
pureObservable.subscribe((val) => {
    console.log(val);
});
