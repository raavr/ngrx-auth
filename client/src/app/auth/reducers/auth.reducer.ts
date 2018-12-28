import { AuthActionUnion, AuthActionTypes } from '../actions/auth.actions';

export interface State {
  token: string | null;
}

export const initialState: State = {
  token: null
}

export function reducer(state = initialState, action: AuthActionUnion): State {
  switch(action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        token: action.payload.token
      }
    }

    default: {
      return state;
    }
  }
}

export const getToken = (state: State) => state.token;