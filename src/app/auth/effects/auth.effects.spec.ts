import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { Credentials, User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { AuthEffects } from '../effects/auth.effects';
import { Login, LoginSuccess, LoginFailure } from '../actions/auth.actions';

describe('AuthEffects', () => {
  let effects: AuthEffects;
  let authService: any;
  let actions$: Observable<any>;
  let routerService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        {
          provide: AuthService,
          useValue: { login: () => { } },
        },
        {
          provide: Router,
          useValue: { navigate: () => { } },
        },
      ],
    });

    effects = TestBed.get(AuthEffects);
    authService = TestBed.get(AuthService);
    actions$ = TestBed.get(Actions);
    routerService = TestBed.get(Router);

    spyOn(routerService, 'navigate').and.callThrough();
  });

  it('should return a LoginSuccess action with user object if login succeeds', () => {
    const credentials: Credentials = { email: 'test@example.com', password: '' };
    const user = { name: 'Test' } as User;
    const action = new Login(credentials);
    const completion = new LoginSuccess({ user });

    actions$ = hot('-a---', { a: action });
    const response = cold('-a|', { a: user });
    const expected = cold('--b', { b: completion });
    authService.login = () => response;

    expect(effects.login$).toBeObservable(expected);
  });

  it('should return a LoginFailure action if the login service throws an Error', () => {
    const credentials: Credentials = { email: 'test@example.com', password: '' };
    const action = new Login(credentials);
    const completion = new LoginFailure('Invalid email or password');
    const error = 'Invalid email or password';

    actions$ = hot('-a---', { a: action });
    const response = cold('-#', {}, error);
    const expected = cold('--b', { b: completion });
    authService.login = () => response;

    expect(effects.login$).toBeObservable(expected);
  });

});
