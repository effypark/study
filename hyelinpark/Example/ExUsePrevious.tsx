import React, { useState } from "react";
import { usePrevious } from "../custom_hook";

export function ExUsePrevious() {
  const [count, setCount] = useState<number>(0);

  // 이전 값 가져오기(마지막 렌더링 시 hook 에 전달됨)
  const prevCount: number = usePrevious<number>(count);

  // 현재 카운트 값과 이전 카운트 값을 모두 표시
  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
