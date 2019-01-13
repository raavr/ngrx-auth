import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import * as AuthActions from '../../auth/actions/auth.actions';
import * as ProfileActions from '../actions/profile.action';
import { ProfileEffects } from './profile.effects';
import * as AccountsActions from '../actions/accounts.action';
import { cold } from 'jasmine-marbles';

describe('AuthEffects', () => {
  let effects: ProfileEffects;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfileEffects,
        provideMockActions(() => actions$),
      ],
    });
    effects = TestBed.get(ProfileEffects);
    actions$ = TestBed.get(Actions);
  });

  it('should return a ProfileFailure action', () => {
    const action = new AuthActions.Logout();

    actions$ = of(action);
    const profileAction = new ProfileActions.ProfileFailure();
    const accountsAction =  new AccountsActions.GetAccountsFailure();

    const expected = cold('(ab|)', { a: profileAction, b: accountsAction });
    expect(effects.logout$).toBeObservable(expected)
  });

});