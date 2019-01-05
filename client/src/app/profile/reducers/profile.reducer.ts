import { User } from 'src/app/auth/models/user';
import * as ProfileActions from '../actions/profile.action';

export interface State {
  user: User;
}

const initialState: State = {
  user: null
}

export function reducer(
  state: State = initialState,
  action: ProfileActions.ProfileActionUnion
) {
  switch(action.type) {
    case ProfileActions.ProfileActionTypes.ProfileSuccess: {
      return {
        ...state,
        user: action.payload
      } 
    }

    case ProfileActions.ProfileActionTypes.ProfileFailure: {
      return initialState;
    }
    
    default: {
      return state;
    }
  }
}

export const getProfile = (state: State) => state.user;