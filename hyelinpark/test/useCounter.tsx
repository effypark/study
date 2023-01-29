import { useState, useCallback } from "react";

export function useCounter() {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => setCount((x: number) => x + 1), []);
  return { count, increment };
}

// custom hook 을 테스트 하기 위한 예시 : useCounter
// useCounter 는 count 와 count 를 업데이트 시키는 함수 increment 을 반환하는 custom hook
