"use strict";
// import { map, of, switchMap } from "rxjs";
Object.defineProperty(exports, "__esModule", { value: true });
// const switched = of(2, 3, 4)
//     .pipe(switchMap((x) => {
//         of(x, x ** 2, x ** 3)
//     }));
// switched.subscribe((val) => {
//     console.log(val);
// })
const rxjs_1 = require("rxjs");
const switched = (0, rxjs_1.of)(1, 2, 3).pipe((0, rxjs_1.switchMap)(x => (0, rxjs_1.of)(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));
const newNum = (0, rxjs_1.of)(9, 8, 7).pipe((0, rxjs_1.switchMap)((x) => (0, rxjs_1.of)(x, x ** 2, x ** 3)));
