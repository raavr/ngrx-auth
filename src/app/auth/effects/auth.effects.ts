import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, LoginSuccess, LoginFailure } from '../actions/auth.actions';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Credentials } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/']))
  );

  constructor(
    private actions$: Actions, 
    private authSerivce: AuthService,
    private router: Router
  ) {}
}
