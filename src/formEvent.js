"use strict";
// fromEvent<T>(target: any, eventName: string, options?: EventListenerOptions | ((...args: any[]) => T), resultSelector?: (...args: any[]) => T): Observable<T>
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const clicks = (0, rxjs_1.fromEvent)(document, "click");
clicks.subscribe(x => console.log(x));
