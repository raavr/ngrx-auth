import { reducer, initialState, State } from './auth.reducer';
import { Logout, DecodeTokenSuccess } from '../actions/auth.actions';

describe("Auth Reducer", () => {

  it('should return the default state', () => {
    const state = Object.assign({}, initialState);
    const action = {} as any;
    const result = reducer(state, action);

    expect(result).toBe(state);
  });

  it('should return a user', () => {
    const action = new DecodeTokenSuccess({ id: '1', name: 'Test', role: 'admin' });
    const expResult = { user: { id: '1', name: 'Test', role: 'admin' } } as State;

    const result = reducer(initialState, action);
    expect(result).toEqual(expResult);
  });

  it('should logout a user', () => {
    const action = new Logout();
    const expectedResult = initialState;

    const result = reducer(initialState, action);

    expect(result).toBe(expectedResult)
  });

});