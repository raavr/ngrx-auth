import { Injectable } from '@angular/core';
import { User, Credentials } from '../models/user';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login({ email, password }: Credentials): Observable<User> {
    if (email !== 'test@example.com') {
      return throwError('Invalid email or password');
    }

    return of({ name: 'User' });
  }

}