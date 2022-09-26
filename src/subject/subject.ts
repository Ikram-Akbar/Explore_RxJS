import { Subject, from } from 'rxjs';

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





const subject = new Subject<string>();
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

const observable = from(["a", "b", "c"]);
observable.subscribe(subject);