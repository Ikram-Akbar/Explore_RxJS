"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// const data = of(1, 2, 3, 4, 5);
// data
//     .pipe(
//         tap((n) => {
//             if (n > 3) {
//                 throw new TypeError(`value ${n} is greater than 3`);
//             }
//         })
//     )
//     .subscribe({
//         next(v) {
//             console.log("the value : " + v);
//         },
//         error(err) {
//             console.log(err.message);
//         },
//     });
const newData = (0, rxjs_1.of)(1, 2, 7, 3, 4, 5, 6);
newData.pipe((0, rxjs_1.tap)((x) => {
    if (x > 5) {
        throw new TypeError(` value of ${x} is greater than 5 `);
    }
})).subscribe({
    next() {
    },
    error(err) {
        console.log(err.message);
    }
});
