import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, LoginSuccess, LoginFailure } from '../actions/auth.actions';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, delay } from 'rxjs/operators';
import { Credentials } from '../models/user';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((credentials: Credentials) => 
      this.authSerivce.login(credentials).pipe(
        map(user => new LoginSuccess({ user })),
        catchError(error => of(new LoginFailure(error)))
      )
    )
  )

  constructor(
    private actions$: Actions, 
    private authSerivce: AuthService
  ) {}
}
