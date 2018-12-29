import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './reducers';
import * as fromAuth from './auth/reducers';
import { Observable } from 'rxjs';
import * as AuthAction from './auth/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
  }

  logout() {
    this.store.dispatch(new AuthAction.Logout());
  }
}
