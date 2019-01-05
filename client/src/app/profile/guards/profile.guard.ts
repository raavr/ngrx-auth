import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import * as ProfileActions from '../actions/profile.action';
import * as fromProfile from '../reducers'
import * as AuthActions from 'src/app/auth/actions/auth.actions';
  
@Injectable({
  providedIn: 'root',
})
export class ProfileGuard implements CanActivate {
  constructor(private profileService: ProfileService, private router: Router, private store: Store<fromProfile.State>) {}
  
  canActivate(): Observable<boolean> {
    return this.profileService.getMyProfile().pipe(
      map(user => new ProfileActions.ProfileSuccess(user)),
      tap((action: ProfileActions.ProfileSuccess) => this.store.dispatch(action)),
      map(user => !!user),
      catchError((error) => {
        if(error.status === 401) {
          this.store.dispatch(new AuthActions.Logout());
        } else {
          this.router.navigate(['/404']);
        }
        return of(false);
      })
    )
  }
}