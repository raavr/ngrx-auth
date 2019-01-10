import { Action } from '@ngrx/store';
import { User } from 'src/app/auth/models/user';

export enum AccountsActionTypes {
  LoadAccountsSuccess = '[Accounts] Load Accounts Success',
  LoadAccountsFailure = '[Accounts] Load Accounts Failure'
}

export class LoadAccountsSuccess implements Action {
  readonly type = AccountsActionTypes.LoadAccountsSuccess

  constructor(public payload: User[]) { }
}

export class LoadAccountsFailure implements Action {
  readonly type = AccountsActionTypes.LoadAccountsFailure;
}

export type AccountsActionUnion = 
  | LoadAccountsSuccess
  | LoadAccountsFailure;