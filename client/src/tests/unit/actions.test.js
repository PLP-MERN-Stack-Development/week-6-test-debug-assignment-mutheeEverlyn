import { increment, decrement, INCREMENT, DECREMENT } from '../../store/actions';

describe('actions', () => {
  it('should create an action to increment', () => {
    const expectedAction = {
      type: INCREMENT,
    };
    expect(increment()).toEqual(expectedAction);
  });

  it('should create an action to decrement', () => {
    const expectedAction = {
      type: DECREMENT,
    };
    expect(decrement()).toEqual(expectedAction);
  });
}); 