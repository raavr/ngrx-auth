import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import * as ProfileActions from '../actions/profile.action';
import * as fromRoot from '../reducers';
import * as fromProfile from '../reducers';
import { ProfileGuard } from './profile.guard';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import * as AuthActions from '../../auth/actions/auth.actions';

describe('Profile Guard', () => {
  let guard: ProfileGuard;
  let store: Store<any>;
  let service: ProfileService;
  let router: Router;
  let spyService: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          profile: combineReducers(fromProfile.reducers),
        }),
        HttpClientTestingModule
      ],
      providers: [
        ProfileService,
        {
          provide: Router,
          useValue: { navigate: () => {} },
        },
      ]
    });

    store = TestBed.get(Store);
    guard = TestBed.get(ProfileGuard);
    service = TestBed.get(ProfileService);
    router = TestBed.get(Router);
  });
  
  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyService = spyOn(service, 'getMyProfile');
    spyOn(router, 'navigate');
  });

  it('should return false if the profile service responds with an error', () => {
    const serviceRes = cold('#', {}, 'Error'); 
    spyService.and.returnValue(serviceRes);
    
    const expected = cold('(a|)', { a: false });
    expect(guard.canActivate()).toBeObservable(expected);
  });
  
  it('should return true if the profile service return a valid value', () => {
    const user: any = {};
    const serviceRes = cold('(a|)', { a: user });
    spyService.and.returnValue(serviceRes);
    
    const expected = cold('(b|)', { b: true });

    expect(guard.canActivate()).toBeObservable(expected);
  });
  
  it('should return true and dispatch action if the profile service return a valid value', (done) => {
    const user: any = {};
    const action = new ProfileActions.ProfileSuccess(user);
    spyService.and.returnValue(of(user));
    
    guard.canActivate().subscribe((activated) => {
      expect(activated).toEqual(true);
      expect(store.dispatch).toHaveBeenCalledWith(action);
      done();
    });
  });

  it('should return false and dispatch action if the profile service return an error with status 401', (done) => {
    const action = new AuthActions.Logout();
    spyService.and.returnValue(throwError({ status: 401 }));
    
    guard.canActivate().subscribe((activated) => {
      expect(activated).toEqual(false);
      expect(store.dispatch).toHaveBeenCalledWith(action);
      done();
    });
  });

  it('should return false and navigate to "/404" if the profile service return an error with status 403', (done) => {
    spyService.and.returnValue(throwError({ status: 403 }));
    
    guard.canActivate().subscribe((activated) => {
      expect(activated).toEqual(false);
      expect(router.navigate).toHaveBeenCalledWith(['/404']);
      done();
    });
  });
});
