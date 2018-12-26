import { reducer, initialState } from './auth.reducer';
import { Login, LoginSuccess, LoginFailure } from '../actions/auth.actions';

describe("Auth Reducer", () => {

  it('should return the default state', () => {
    const state = Object.assign({}, initialState);
    const action = {} as any;
    const result = reducer(state, action);

    expect(result).toBe(state);
  });

  it('should make pending to false and have no error', () => {
    const action = new LoginSuccess({ user: { name: 'Test' }});
    const expectedResult = {
      user: { name: 'Test' },
    }
    const result = reducer(initialState, action);
    expect(result).toEqual(expectedResult);
  });

});