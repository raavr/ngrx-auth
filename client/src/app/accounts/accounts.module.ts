import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './containers/profile/profile.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './effects/profile.effects';
import { reducers } from './reducers';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { AccountsComponent } from './containers/accounts/accounts.component';

@NgModule({
  declarations: [
    ProfileComponent, 
    ProfileDetailComponent, 
    AccountsComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MaterialModule,
    StoreModule.forFeature('accounts', reducers),
    EffectsModule.forFeature([ProfileEffects]),
  ]
})
export class AccountsModule { }
