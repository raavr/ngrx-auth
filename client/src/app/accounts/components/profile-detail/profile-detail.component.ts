import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/auth/models/user';

@Component({
  selector: 'app-profile-detail',
  template: `
    <mat-card>
    <mat-card-title>My Profile</mat-card-title>
    <mat-card-content>
      <mat-list>
        <mat-list-item>{{name}}</mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>{{email}}</mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>{{phone}}</mat-list-item>
      </mat-list>
    </mat-card-content>
  </mat-card>
  `,
  styles: []
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
}
