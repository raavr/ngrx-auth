import { User } from 'src/app/auth/models/user';
import * as ProfileActions from '../actions/profile.action';

export interface State {
  id: string;
}

export const initialState: State = {
  id: null
}

export function reducer(
  state: State = initialState,
  action: ProfileActions.ProfileActionUnion
) {
  switch(action.type) {
    case ProfileActions.ProfileActionTypes.ProfileSuccess: {
      return {
        ...state,
        id: action.payload.id
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

export const getProfileId = (state: State) => state.id;