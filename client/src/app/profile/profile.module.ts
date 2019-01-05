import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './containers/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MaterialModule } from '../material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './effects/profile.effects';
import { reducers } from './reducers';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';

@NgModule({
  declarations: [ProfileComponent, ProfileDetailComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    StoreModule.forFeature('account', reducers),
    EffectsModule.forFeature([ProfileEffects]),
  ]
})
export class ProfileModule { }
