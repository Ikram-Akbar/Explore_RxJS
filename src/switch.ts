// import { map, of, switchMap } from "rxjs";

// const switched = of(2, 3, 4)
//     .pipe(switchMap((x) => {
//         of(x, x ** 2, x ** 3)
//     }));

// switched.subscribe((val) => {
//     console.log(val);
// })

import { of, switchMap } from 'rxjs';
 
const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x ** 2, x ** 3)));
switched.subscribe(x => console.log(x));

const newNum = of(9, 8, 7).pipe(switchMap((x:number) => of(x,x**2,x**3)))