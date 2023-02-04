import { useState, useEffect } from "react";

export function useKeyPress(targetKey: string): boolean {
  // 키를 눌렀는지 확인할 state
  const [keyPressed, setKeyPressed] = useState(false);
  // 누른 키가 대상 키인 경우 true로 설정됨
  function downHandler({ key }): void {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // 해제된 키가 대상 키인 경우 false로 설정됨
  const upHandler = ({ key }): void => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // event listeners 삭제하는 clean-up 함수
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
}
