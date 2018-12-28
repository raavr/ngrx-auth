import { reducer, initialState } from './auth.reducer';
import { LoginSuccess } from '../actions/auth.actions';

describe("Auth Reducer", () => {

  it('should return the default state', () => {
    const state = Object.assign({}, initialState);
    const action = {} as any;
    const result = reducer(state, action);

    expect(result).toBe(state);
  });

  it('should make pending to false and have no error', () => {
    const action = new LoginSuccess({ token: 'some_token'});
    const expectedResult = { token: 'some_token'};

    const result = reducer(initialState, action);
    expect(result).toEqual(expectedResult);
  });

});