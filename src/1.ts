import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

// const number$ = new Observable(observer => {
//     observer.next(1);
//     observer.next(2);

//     // observer.error('error occured');

//     observer.next(3);
//     observer.complete();

//     observer.next(4);
// });

const number$: Observable<number> = new Observable(observer => {
    let counter = 0;
    const handle = setInterval(() => {
        observer.next(counter++);
    }, 1000);
    return () => {
        clearInterval(handle);
    };
});

number$.pipe(
    map(x => x * x),
    filter(x => x % 2 === 0)
).subscribe(console.log);

// const subscription = number$.subscribe(
//     x => console.log(x),
//     error => console.log(error),
//     () => console.log('completed')
// );

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 5000);