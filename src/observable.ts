// Create a observable
/*

অবর্জাবেবল ঃ কোন কিছু দেখা বা নটিশ করা । এইখানে আমরা new Observable() দিয়ে কাজ করে থাকি, 
যদি কোন আইটেম কে আমরা ইমিট( ইভেন্ট ইমিট / eventemmit) করতে চাই তাহলে Observable এ দেয়া  subscriber দিয়ে ইমিট করে দিতে পারি, 
উদা ঃ subscriber.next( )  এই ফাংশনে প্যারামিটার হিসেবে যা দেয়া হবে সেটি মূলত ইমিট হবে ।

* আবার যদি আমরা সেই অভজার্ভবেবল কে দেখতে চাই, তাহলে subscribe করতে হবে ।
subscribe করার নিয়ম হচ্ছে ঃ observable.subscribe ( );
 এই প্যারামিটারটিতে আমরা অব্জেক্ট পাঠাতে পারি, সেখানে আমরা ৩টি ফাংশন দিয়ে কাজ করে থাকি;
 ১ম ঃ 
 next( value ){};
 ২য়ঃ 
 error(err){};
 ৩য়ঃ
 complete(){};

*/

import { Observable } from "rxjs";


const myObservable = new Observable((subscriber) => {
    subscriber.next("first string ");
    subscriber.next("second string");
    // call a set time setTimeout function
    setTimeout(() => {
        subscriber.next("third string");
        subscriber.next("fourth string");
        subscriber.complete();
    }, 5000)

});

myObservable.subscribe({
    next(value) {
        console.log(`value from : ${value}`);
    },
    error(err) {
        console.log(`got error from ${err}`);
    },
    complete() {
        console.log("Complete the operation");
    }
})
console.log("after subscribe");