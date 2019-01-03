import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './reducers';
import * as fromAuth from './auth/reducers';
import * as fromNavbar from './navbar/reducers';
import { Observable } from 'rxjs';
import * as AuthAction from './auth/actions/auth.actions';
import { User } from './auth/models/user';
import { NavbarActions } from './navbar/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  loggedIn$: Observable<boolean>;
  user$: Observable<User>;
  showSidenav$: Observable<boolean>;
  
  constructor(private store: Store<fromRoot.State>) {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    this.user$ = this.store.pipe(select(fromAuth.getUser));
    this.showSidenav$ = this.store.pipe(select(fromNavbar.getShowSidenav));
  }

  closeSidenav() {
    this.store.dispatch(new NavbarActions.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new NavbarActions.OpenSidenav());
  }

  logout() {
    this.closeSidenav();
    this.store.dispatch(new AuthAction.Logout());
  }

  ngOnInit() {
    this.store.dispatch(new AuthAction.AutoLogin());
  }
}
