import counterReducer from '../../store/reducer';
import { INCREMENT, DECREMENT } from '../../store/actions';

describe('counterReducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual({ count: 0 });
  });

  it('should handle INCREMENT', () => {
    expect(counterReducer({ count: 0 }, { type: INCREMENT })).toEqual({ count: 1 });
  });

  it('should handle DECREMENT', () => {
    expect(counterReducer({ count: 1 }, { type: DECREMENT })).toEqual({ count: 0 });
  });
}); 