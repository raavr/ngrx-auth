import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { Credentials } from '../models/user';
import { AuthService } from '../services/auth.service';
import { AuthEffects } from '../effects/auth.effects';
import { Login, LoginSuccess, LoginFailure, Logout, LoginRedirect } from '../actions/auth.actions';
import { Token } from '../models/token';
import { TokenService } from '../services/token.service';

describe('AuthEffects', () => {
  let effects: AuthEffects;
  let authService: any;
  let actions$: Observable<any>;
  let routerService: any;
  let tokenService: TokenService;

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
        TokenService
      ],
    });

    effects = TestBed.get(AuthEffects);
    authService = TestBed.get(AuthService);
    actions$ = TestBed.get(Actions);
    routerService = TestBed.get(Router);
    tokenService = TestBed.get(TokenService);

    spyOn(routerService, 'navigate').and.callThrough();
    spyOn(tokenService, 'removeToken').and.callFake(() => {});
    spyOn(tokenService, 'setToken');
  });

  it('should return a LoginSuccess action with token object if login succeeds', () => {
    const credentials: Credentials = { email: 'test@example.com', password: '' };
    const token = { token: 'some_token' } as Token;
    const action = new Login(credentials);
    const completion = new LoginSuccess(token);

    actions$ = hot('-a---', { a: action });
    const response = cold('-a|', { a: token });
    const expected = cold('--b', { b: completion });
    authService.login = () => response;

    expect(effects.login$).toBeObservable(expected);
  });

  it('should return a LoginFailure action if the login service throws an Error', () => {
    const credentials: Credentials = { email: 'test@example.com', password: '' };
    const action = new Login(credentials);
    const completion = new LoginFailure('Invalid email or password');
    const error = { error: { message: 'Invalid email or password' }};

    actions$ = hot('-a---', { a: action });
    const response = cold('-#', {}, error);
    const expected = cold('--b', { b: completion });
    authService.login = () => response;

    expect(effects.login$).toBeObservable(expected);
  });

  it('should navigate to "/" when loginSuccess effect is called', (done) => {
    const action = new LoginSuccess({ token: 'some_token' });
    actions$ = of(action);
    effects.loginSuccess$.subscribe(() => {
      expect(routerService.navigate).toHaveBeenCalledWith(['/']);
      done();
    });
  });
  
  it('should remove token when logout effect is called', (done) => {
    const action = new Logout();
    actions$ = of(action);
    effects.logout$.subscribe(() => {
      expect(tokenService.removeToken).toHaveBeenCalled();
      done();
    });
  });

  it('should navigate to "/login" when logout effect is called', (done) => {
    const action = new Logout();
    actions$ = of(action);
    effects.loginRedirect$.subscribe(() => {
      expect(routerService.navigate).toHaveBeenCalledWith(['/login']);
      done();
    });
  });

  it('should navigate to "/login" when loginRedirect effect is called', (done) => {
    const action = new LoginRedirect();
    actions$ = of(action);
    effects.loginRedirect$.subscribe(() => {
      expect(routerService.navigate).toHaveBeenCalledWith(['/login']);
      done();
    });
  });
});
