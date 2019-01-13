import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user';
import { Store, select } from '@ngrx/store';
import * as fromAccounts from '../../reducers';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-accounts',
  template: `
    <app-profile-detail *ngFor="let account of (accounts$ | async)" [profile]="account"></app-profile-detail>
  `
})
export class AccountsComponent {
  accounts$: Observable<User[]>

  constructor(private store: Store<fromRoot.State>) {
    this.accounts$ = store.pipe(select(fromAccounts.getAccounts));
  }
}
