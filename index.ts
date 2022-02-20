import { user$ as serviceUser$ } from './subject';

const user$ = serviceUser$;

user$.subscribe({
  next: (v) => console.log(`observerA: ${v.username}`),
  error: (e) => console.log(`observerC: ${e}`),
});

