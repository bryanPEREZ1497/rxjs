import { BehaviorSubject, Subject } from 'rxjs';
interface UserInterface {
  username?: string;
}
export const user = new BehaviorSubject<UserInterface>({});
export const user$ = user.asObservable();

// user$.subscribe({
//   next: (v) => console.log(`observerA: ${v}`),
// });

// user$.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });

user.next({ username: 'Bryan' });
// user.next({prop:'2'});

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
