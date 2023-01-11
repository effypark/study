import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // 로직이 한 번만 실행되도록 state를 사용하기 위해 상태 함수를 전달
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // local storage 에 key로 저장되어 있는 data를 item 으로 가져옴
      const item = window.localStorage.getItem(key);
      // item 이 존재하면 json 형식으로 반환하고, 없으면 초기값 리턴
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // 에러일 때 초기값 리턴
      console.log(error);
      return initialValue;
    }
  });
  // 다음과 같은 useState의 setter 함수의 래핑된 버전을 반환
  // 새값을 local storage 에 담음
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // instanceof 연산자는 생성자의 prototype 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // state 저장
      setStoredValue(valueToStore);
      // local storage 에 저장
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // 에러 처리
      console.log(error);
    }
  };
  return [storedValue, setValue] as const;
}
