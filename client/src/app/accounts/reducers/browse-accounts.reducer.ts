import * as AccountsActions from '../actions/accounts.action';

export interface State {
  ids: string[];
}

export const initialState: State = {
  ids: []
}

export function reducer(
  state: State = initialState,
  action: AccountsActions.AccountsActionUnion
) {
  switch(action.type) {
    case AccountsActions.AccountsActionTypes.GetAccountsSuccess: {
      return {
        ...state,
        ids: action.payload.map(user => user.id)
      } 
    }

    case AccountsActions.AccountsActionTypes.GetAccountsFailure: {
      return initialState;
    }
    
    default: {
      return state;
    }
  }
}

export const getAccountsIds = (state: State) => state.ids;