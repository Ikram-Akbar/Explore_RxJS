import { Observable } from "rxjs";



const pureObservable = new Observable(function subscribe(subscriber) {
   
    setInterval(() => {
        subscriber.next("Ikram Akbar");
    },1000)
    // console.log(id);
})
pureObservable.subscribe((val) => {
     console.log(val);
 })