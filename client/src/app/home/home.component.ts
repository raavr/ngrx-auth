import { Component } from '@angular/core';
import * as fromAuth from '../auth/reducers';
import * as fromRoot from '../reducers';
import { Store, select } from '@ngrx/store';
import { User } from 'src/app/auth/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  template: `
    <mat-card>
      <mat-card-title>Hi, {{(authUser$ | async).name}}</mat-card-title>
      <mat-card-content>What do you want to do today?</mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      text-align: center;
    }
  `]
})
export class HomeComponent {
  authUser$: Observable<User>;

  constructor(private store: Store<fromRoot.State>) {
    this.authUser$ = store.pipe(select(fromAuth.getUser));
  }

}
