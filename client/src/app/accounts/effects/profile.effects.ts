import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ProfileActions from '../actions/profile.action';
import * as AccoutnsActions from '../actions/accounts.action';
import { switchMap } from 'rxjs/operators';
import { AuthActionTypes } from '../../auth/actions/auth.actions';

@Injectable()
export class ProfileEffects {

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    switchMap(() => [
      new ProfileActions.ProfileFailure(),
      new AccoutnsActions.GetAccountsFailure()
    ])
  )

  constructor(
    private actions$: Actions,
  ) { }
}