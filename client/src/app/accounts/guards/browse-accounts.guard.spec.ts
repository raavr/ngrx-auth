import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import * as fromRoot from '../reducers';
import * as fromBrowse from '../reducers';
import { BrowseAccountsGuard } from './browse-accounts.guard';
import { BrowseAccountsService } from '../services/browse-accounts.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import * as AuthActions from '../../auth/actions/auth.actions';
import { GetAccountsSuccess } from '../actions/accounts.action';

describe('Browse Accounts Guard', () => {
  let guard: BrowseAccountsGuard;
  let store: Store<any>;
  let service: BrowseAccountsService;
  let router: Router;
  let spyService: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          profile: combineReducers(fromBrowse.reducers),
        }),
        HttpClientTestingModule
      ],
      providers: [
        BrowseAccountsService,
        {
          provide: Router,
          useValue: { navigate: () => {} },
        },
      ]
    });

    store = TestBed.get(Store);
    guard = TestBed.get(BrowseAccountsGuard);
    service = TestBed.get(BrowseAccountsService);
    router = TestBed.get(Router);
  });
  
  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyService = spyOn(service, 'getAllAccounts');
    spyOn(router, 'navigate');
  });

  it('should return false if the browse service responds with an error', () => {
    const serviceRes = cold('#', {}, 'Error'); 
    spyService.and.returnValue(serviceRes);
    
    const expected = cold('(a|)', { a: false });
    expect(guard.canActivate()).toBeObservable(expected);
  });
  
  it('should return true if the browse service return a valid value', () => {
    const users: any[] = [];
    const serviceRes = cold('(a|)', { a: users });
    spyService.and.returnValue(serviceRes);
    
    const expected = cold('(b|)', { b: true });

    expect(guard.canActivate()).toBeObservable(expected);
  });
  
  it('should return true and dispatch action if the browse service return a valid value', (done) => {
    const users: any = [];
    const action = new GetAccountsSuccess(users);
    spyService.and.returnValue(of(users));
    
    guard.canActivate().subscribe((activated) => {
      expect(activated).toEqual(true);
      expect(store.dispatch).toHaveBeenCalledWith(action);
      done();
    });
  });

  it('should return false and dispatch action if the browse service return an error with status 401', (done) => {
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