import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import * as AuthActions from '../../auth/actions/auth.actions';
import * as ProfileActions from '../actions/profile.action';
import { ProfileEffects } from './profile.effects';

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

  it('should return a ProfileFailure action', (done: any) => {
    const action = new AuthActions.Logout();

    actions$ = of(action);

    effects.logout$.subscribe((profAction) => {
      expect(profAction).toEqual(new ProfileActions.ProfileFailure());
      done();
    });
  });

});