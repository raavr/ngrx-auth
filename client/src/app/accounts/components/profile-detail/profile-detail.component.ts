import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/auth/models/user';

@Component({
  selector: 'app-profile-detail',
  template: `
    <mat-card>
      <mat-card-header>
        <img mat-card-avatar src="{{avatar}}">
        <mat-card-title>{{name}}</mat-card-title>
        <mat-card-subtitle>{{email}}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p><span class="profile__label">Phone: </span>{{phone}}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    mat-card {
      margin: 15px;
    }

    .profile__label {
      font-weight: 700;
    }
  `]
})
export class ProfileDetailComponent {
  @Input() profile: User;
  
  get name() {
    return this.profile.name;
  }

  get email() {
    return this.profile.email;
  }

  get phone() {
    return this.profile.phone;
  }

  get avatar() {
    return this.profile.avatar;
  }
}
