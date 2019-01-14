import { reducer, initialState, State } from './browse-accounts.reducer';
import { GetAccountsSuccess, GetAccountsFailure } from '../actions/accounts.action';

describe("Browse Accounts Reducer", () => {

  it('should return the default state', () => {
    const action = {} as any;
    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should return a users ids', () => {
    const users = [
      { id: '1', name: 'Test', email: 'test@example.com' },
      { id: '2', name: 'User', email: 'user@example.com' },
    ]
    const action = new GetAccountsSuccess(users);
    const expResult = { ids: ['1', '2'] } as State;

    const result = reducer(initialState, action);
    expect(result).toEqual(expResult);
  });

  it('should return the initial state when the GetAccountsFailure action is dispatched', () => {
    const action = new GetAccountsFailure();
    const expectedResult = initialState;

    const result = reducer(initialState, action);

    expect(result).toBe(expectedResult)
  });

});