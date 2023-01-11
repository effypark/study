import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T): T {
  // 참조 개체는 현재 속성이 변경 가능한 일반 컨테이너
  // 클래스의 인스턴스 속성과 유사한 모든 값을 보유할 수 있음
  const ref: any = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]); // value 가 변경 되었을 때만 다시 실행

  // 이전 값 반환(위의 useEffect에서 업데이트 전에 발생)
  return ref.current;
}
