import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

test("should use counter", () => {
  const { result } = renderHook(() => useCounter());

  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe("function");
});

// 위에 표시된 테스트로 해도 괜찮지만 카운터를 사용하려는 대상, 즉 계산 자체를 실제로 테스트하지는 않습니다
// 함수를 호출하고 값이 증가하는지 확인하여 이 테스트를 개선할 수 있습니다

import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

// 📌 increment가 호출된 후 현재 count값은 이제 hook에서 반환된 새 값을 반영합니다
// act 라는 유틸리티는 hook이 브라우저에서 작동하는 방식을 시뮬레이트하여 내부 값을 업데이트할 수 있도록 합니다

// counter 의 초기값을 props 로 받아올 때

// ex) useCounter(초기값)

// import { useState, useCallback } from 'react'

// export function useCounter(initialValue = 0) {
//   const [count, setCount] = useState(initialValue)
//   const increment = useCallback(() => setCount((x: number) => x + 1), [])
//   return { count, increment }
// }

import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./useCounter";

test("should increment counter from custom initial value", () => {
  const { result } = renderHook(() => useCounter(9000));

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(9001);
});
