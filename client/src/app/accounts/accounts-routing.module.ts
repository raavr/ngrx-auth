import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './containers/profile/profile.component';
import { ProfileGuard } from './guards/profile.guard';
import { BrowseAccountsGuard } from './guards/browse-accounts.guard';
import { AccountsComponent } from './containers/accounts/accounts.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile' },
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [
      ProfileGuard
    ], 
  },
  { 
    path: 'browse', 
    component: AccountsComponent,
    canActivate: [
      BrowseAccountsGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
