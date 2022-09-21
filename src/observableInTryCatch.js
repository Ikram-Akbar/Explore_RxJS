"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const tryObservables = new rxjs_1.Observable((subscriber) => {
    try {
        // we can user subscriber.next() for add/push the data
        subscriber.next(" Id of user 1");
        subscriber.next(" Id of user 2");
        subscriber.next(" Id of user 3");
    }
    catch (err) {
        subscriber.error(err); //if any error will execute this block
    }
});
tryObservables.subscribe((val) => {
    console.log(val);
});
