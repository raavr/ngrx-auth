import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromProfile from './profile.reducer';
import * as fromAccounts from './accounts.reducer';
import * as fromBrowse from './browse-accounts.reducer';

export interface AccountsState {
  accounts: fromAccounts.State;
  profile: fromProfile.State;
  browse: fromBrowse.State
}

export interface State extends fromRoot.State {
  accounts: AccountsState;
}

export const reducers: ActionReducerMap<AccountsState> = {
  accounts: fromAccounts.reducer,
  profile: fromProfile.reducer,
  browse: fromBrowse.reducer
};

export const selectAccountsState = createFeatureSelector<State, AccountsState>('accounts');

export const getAccountEntitiesState = createSelector(
  selectAccountsState,
  (state: AccountsState) => state.accounts
);

export const {
  selectEntities: getAccountEntities,
} = fromAccounts.adapter.getSelectors(getAccountEntitiesState);

export const selectProfileState = createSelector(
  selectAccountsState,
  (state: AccountsState) => state.profile
);

export const getProfileId = createSelector(
  selectProfileState, 
  fromProfile.getProfileId
);

export const getProfile = createSelector(
  getAccountEntities,
  getProfileId,
  (accounts, id) => accounts[id]
);

export const selectBrowseAccountsState = createSelector(
  selectAccountsState,
  (state: AccountsState) => state.browse
);

export const getAccountsIds = createSelector(
  selectBrowseAccountsState,
  fromBrowse.getAccountsIds
);

export const getAccounts = createSelector(
  getAccountEntities,
  getAccountsIds,
  (accounts, ids) => ids.map(id => accounts[id]) 
);
