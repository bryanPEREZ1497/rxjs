import { user$, user } from './subject';

user$.subscribe({
  next: (v) => console.log(`observerA: ${v.username}`),
  error: (e) => console.log(`observerC: ${e}`),
});

user$.subscribe({
  next: (v) => console.log(`observerB: ${v.username}`),
  error: (e) => console.log(`observerC: ${e}`),
});

user.next({
  username:'Bryan Andrés'
});
