import React, { useState, useEffect, useCallback } from "react";

// useAsync hook 을 테스트 하기 위한 함수
// 50:50 비율로 랜덤 결과값 리턴
const myFunction = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve("Submitted successfully 🙌")
        : reject("Oh no there was an error 😞");
    }, 2000);
  });
};

// 실행함수는 asyncFunction 을 wrapping 하고 pending, value, error 의 상태 들을 처리
// useCallback hook 으로 useEffect 가 호출되지 않도록 핸들링
// asyncFunction 의 변경이 감지될 때만 렌더링된다
const useAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);
  //
  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response: any) => {
        setValue(response);
        setStatus("success");
      })
      .catch((error: any) => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { execute, status, value, error };
};

export function ExUseAsync() {
  const { execute, status, value, error } = useAsync<string>(myFunction, false);
  return (
    <div>
      {status === "idle" && <div>Start your journey by clicking a button</div>}
      {status === "success" && <div>{value}</div>}
      {status === "error" && <div>{error}</div>}
      <button onClick={execute} disabled={status === "pending"}>
        {status !== "pending" ? "Click me" : "Loading..."}
      </button>
    </div>
  );
}
