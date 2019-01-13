import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as AccountsActions from '../actions/accounts.action';
import * as fromBrowse from '../reducers';
import * as AuthActions from 'src/app/auth/actions/auth.actions';
import { BrowseAccountsService } from '../services/browse-accounts.service';
  
@Injectable({
  providedIn: 'root',
})
export class BrowseAccountsGuard implements CanActivate {
  constructor(
    private browseService: BrowseAccountsService, 
    private router: Router, 
    private store: Store<fromBrowse.State>
  ) {}
  
  canActivate(): Observable<boolean> {
    return this.browseService.getAllAccounts().pipe(
      map(users => new AccountsActions.GetAccountsSuccess(users)),
      tap((action: AccountsActions.GetAccountsSuccess) => this.store.dispatch(action)),
      map(users => !!users),
      catchError((error) => {
        if(error.status === 401) {
          this.store.dispatch(new AuthActions.Logout());
        } else {
          this.router.navigate(['/404']);
        }
        return of(false);
      })
    )
  }
}