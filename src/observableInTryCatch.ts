import { Observable } from "rxjs";


const tryObservables = new Observable((subscriber) => {
    try {
        // we can user subscriber.next() for add/push the data
        subscriber.next(" Id of user 1");
        subscriber.next(" Id of user 2");
        subscriber.next(" Id of user 3");
    }
    catch (err) {
        subscriber.error(err) //if any error will execute this block
    }
})
tryObservables.subscribe((val) => {
    console.log(val);
})