import { of, tap } from "rxjs";

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

const newData = of(1, 2,7, 3, 4, 5, 6);
newData.pipe(
    tap((x) => {
        if (x>5) {
            throw new TypeError(` value of ${x} is greater than 5 `);
        }
    }),
).subscribe(
    {
        next(): void {

        },
        error(err) {
            console.log(err.message)
        }
    }
);
