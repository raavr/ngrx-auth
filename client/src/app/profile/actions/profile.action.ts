import { Action } from '@ngrx/store';
import { User } from 'src/app/auth/models/user';

export enum ProfileActionTypes {
  ProfileSuccess = '[Profile] Get Profile Success',
  ProfileFailure = '[Profile] Get Profile Failure'
}

export class ProfileSuccess implements Action {
  readonly type = ProfileActionTypes.ProfileSuccess

  constructor(public payload: User) { }
}

export class ProfileFailure implements Action {
  readonly type = ProfileActionTypes.ProfileFailure;
}

export type ProfileActionUnion = 
  | ProfileSuccess
  | ProfileFailure;