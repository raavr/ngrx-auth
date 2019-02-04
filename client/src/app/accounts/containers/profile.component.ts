import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user';
import { Store, select } from '@ngrx/store';
import * as fromProfile from '../reducers';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-profile',
  template: `
    <app-page-header title="My profile"></app-page-header>
    <app-page-container>
      <app-profile-detail [profile]="profile$ | async"></app-profile-detail>
    </app-page-container>
  `
})
export class ProfileComponent {
  profile$: Observable<User>

  constructor(private store: Store<fromRoot.State>) {
    this.profile$ = store.pipe(select(fromProfile.getProfile));
  }
}
