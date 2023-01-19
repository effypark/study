import { useRef } from "react";

export function useFullScreen() {
  const element: any = useRef();

  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };

  const exitFullScreen = () => {
    document.exitFullscreen();
  };

  // useFullScreen hook 내부에서 만든 element (속성) 은 함수를 비구조화한다
  // 속성은 img 와 연결이 되고, 함순 버튼을 눌렀을 때 실행하도록 연결
  return { element, triggerFullScreen, exitFullScreen };
}
