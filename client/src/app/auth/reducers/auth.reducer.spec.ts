import { reducer, initialState } from './auth.reducer';
import { LoginSuccess, Logout } from '../actions/auth.actions';

describe("Auth Reducer", () => {

  it('should return the default state', () => {
    const state = Object.assign({}, initialState);
    const action = {} as any;
    const result = reducer(state, action);

    expect(result).toBe(state);
  });

  it('should make pending to false and have no error', () => {
    const action = new LoginSuccess({ token: 'some_token' });
    const expectedResult = { token: 'some_token' };

    const result = reducer(initialState, action);
    expect(result).toEqual(expectedResult);
  });

  it('should logout a user', () => {
    const action = new Logout();
    const expectedResult = initialState;

    const result = reducer(initialState, action);

    expect(result).toBe(expectedResult)
  });

  it('should return the initial state when logout ', () => {
    const state = Object.assign({}, initialState);
    const action = {} as any;
    const result = reducer(state, action);

    expect(result).toBe(state);
  });

});