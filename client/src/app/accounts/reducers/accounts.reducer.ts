import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '../../auth/models/user';
import * as AccountsActions from '../actions/accounts.action';
import * as ProfileActions from '../actions/profile.action';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: false,
});

export interface State extends EntityState<User> {}
export const initialState: State = adapter.getInitialState();

export function reducer(
  state = initialState,
  action:
    | AccountsActions.AccountsActionUnion
    | ProfileActions.ProfileActionUnion
): State {
  switch (action.type) {
    case AccountsActions.AccountsActionTypes.LoadAccountsSuccess: {
      return adapter.addMany(action.payload, state);
    }

    case ProfileActions.ProfileActionTypes.ProfileSuccess: {
      return adapter.addOne(action.payload, state);
    }

    case ProfileActions.ProfileActionTypes.ProfileFailure: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}