"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// const subject = new Subject<number>();
// subject.subscribe({
//     next: (v) => console.log(`observerA: ${v}`),
// });
// subject.subscribe({
//     next: (v) => console.log(`observerB: ${v}`),
// });
// const observable = from([1, 2, 3]);
// observable.subscribe(subject);
// You can subscribe providing a Subject
// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3
const subject = new rxjs_1.Subject();
subject.subscribe({
    next: (value) => {
        console.log(`first observable get value : ${value}`);
    }
});
subject.subscribe({
    next: (value) => {
        console.log(`second observer get value : ${value}`);
    }
});
const observable = (0, rxjs_1.from)(["a", "b", "c"]);
observable.subscribe(subject);
