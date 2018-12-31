import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './reducers';
import * as fromAuth from './auth/reducers';
import { Observable } from 'rxjs';
import * as AuthAction from './auth/actions/auth.actions';
import { User } from './auth/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loggedIn$: Observable<boolean>;
  user$: Observable<User>;
  
  constructor(private store: Store<fromRoot.State>) {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    this.user$ = this.store.pipe(select(fromAuth.getUser));
  }

  logout() {
    this.store.dispatch(new AuthAction.Logout());
  }

  ngOnInit() {
    this.store.dispatch(new AuthAction.AutoLogin());
  }
}
