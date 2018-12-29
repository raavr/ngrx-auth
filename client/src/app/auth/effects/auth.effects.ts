import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, LoginSuccess, LoginFailure, Logout } from '../actions/auth.actions';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Credentials } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((credentials: Credentials) => 
      this.authSerivce.login(credentials).pipe(
        map(token => new LoginSuccess(token)),
        catchError(({ error: { message } }) => of(new LoginFailure(message)))
      )
    )
  )

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType<LoginSuccess>(AuthActionTypes.LoginSuccess),
    map(action => action.payload),
    tap(({ token }) => this.tokenService.setToken(token)),
    tap(() => this.router.navigate(['/']))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => this.tokenService.removeToken())
  )

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(
      AuthActionTypes.LoginRedirect,
      AuthActionTypes.Logout
    ),
    tap(() => this.router.navigate(['/login']))
  );

  constructor(
    private actions$: Actions, 
    private authSerivce: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}
}