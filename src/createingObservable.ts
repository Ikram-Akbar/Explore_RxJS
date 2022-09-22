import { Observable, Subscription } from "rxjs";


const pureObservable = new Observable(function subscribe(subscriber) {

  let newId =  setInterval(() => {
        subscriber.next("Ikram Akbar");
    }, 1000)

    // return function unsubscribe() {
    //    Disposing 
    // }
    // console.log(id);
})
pureObservable.subscribe((val) => {
    console.log(val);
    

})

