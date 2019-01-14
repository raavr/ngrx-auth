import { Component } from '@angular/core';
import * as fromAuth from '../auth/reducers';
import * as fromRoot from '../reducers';
import { Store, select } from '@ngrx/store';
import { User } from 'src/app/auth/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
    <app-page-header title="Hi, {{(authUser$ | async).name}}" subtitle="What do you want to do today?"></app-page-header>
  `
})
export class HomeComponent {
  authUser$: Observable<User>;

  constructor(private store: Store<fromRoot.State>) {
    this.authUser$ = store.pipe(select(fromAuth.getUser));
  }

}
