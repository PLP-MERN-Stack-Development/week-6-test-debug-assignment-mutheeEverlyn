import { renderHook } from '@testing-library/react';
import { act } from 'react';
import useCounter from '../../hooks/useCounter';

describe('useCounter', () => {
  it('should return the initial count', () => {
    let result;
    act(() => {
      ({ result } = renderHook(() => useCounter()));
    });
    expect(result.current.count).toBe(0);
  });

  it('should return the initial count with a custom initial value', () => {
    let result;
    act(() => {
      ({ result } = renderHook(() => useCounter(5)));
    });
    expect(result.current.count).toBe(5);
  });

  it('should increment the count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should decrement the count', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });

  it('should reset the count', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(6);
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(5);
  });
}); 