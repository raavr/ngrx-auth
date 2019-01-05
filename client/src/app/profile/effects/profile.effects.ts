import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as ProfileActions from '../actions/profile.action';
import { map } from 'rxjs/operators';
import { AuthActionTypes } from '../../auth/actions/auth.actions';

@Injectable()
export class ProfileEffects {

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    map(() => new ProfileActions.ProfileFailure())
  )

  constructor(
    private actions$: Actions,
  ) { }
}