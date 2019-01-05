import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromProfile from './profile.reducer';

export interface ProfileState {
  profile: fromProfile.State;
}

export interface State extends fromRoot.State {
  account: ProfileState;
}

export const reducers: ActionReducerMap<ProfileState> = {
  profile: fromProfile.reducer,
};

export const selectAccountState = createFeatureSelector<State, ProfileState>('account');

export const selectProfileState = createSelector(
  selectAccountState,
  (state: ProfileState) => state.profile
);

export const getProfile = createSelector(
  selectProfileState, 
  fromProfile.getProfile
);