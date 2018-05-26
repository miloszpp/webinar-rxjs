import { Observable, from, fromEvent, Subject } from 'rxjs';
import { map, filter, mergeMap, debounceTime, tap } from 'rxjs/operators';

// const response$ = from(fetch('https://dog.ceo/api/breed/boxer/images/random'));
// response$.subscribe(console.log);

const breedInputEl = document.getElementById('breed-input') as HTMLInputElement;
const breed$ = fromEvent(breedInputEl, 'input');

breed$.pipe(
    map(() => breedInputEl.value),
    filter(breed => breed.length >= 3),
    debounceTime(500),
    mergeMap(breed => from(fetch(`https://dog.ceo/api/breed/${breed}/images/random`))),
    mergeMap(response => from(response.json())),
    map(result => result.message)
).subscribe(url => {
    document.getElementById('dog-img').setAttribute('src', url);
});