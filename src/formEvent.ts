// fromEvent<T>(target: any, eventName: string, options?: EventListenerOptions | ((...args: any[]) => T), resultSelector?: (...args: any[]) => T): Observable<T>

import { fromEvent } from "rxjs";


const clicks = fromEvent(document, "click");
clicks.subscribe(x =>console.log(x))