import { Action } from '@ngrx/store';
import { Credentials } from '../models/user';
import { Token } from '../models/token';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: Credentials) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: Token) { }
} 

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export type AuthActionUnion = 
  | Login
  | LoginSuccess
  | LoginFailure;