import { useState, useCallback } from "react";

// parameter 는 boolean, 디폴트 값으로는 false 가 주어진다

export const useToggle = (
  initialState: boolean = false
): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  // toggle 함수는 디폴트 값으로 주어지는 boolean 값을 반대 값으로 변경시켜준다
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};
