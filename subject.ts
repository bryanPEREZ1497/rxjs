import { BehaviorSubject, Subject } from 'rxjs';
interface UserInterface {
  username?: string;
}
const user = new BehaviorSubject<UserInterface>({
  username: 'Bryan Perez',
});
export const user$ = user.asObservable();

user.next({ username: 'Bryan' });
