import React from "react";
import styled from "styled-components";
import { useFullScreen } from "../hooks";

const Button = styled.button`
  border: none;
  background-color: aliceblue;
  width: 100px;
  height: 50px;
`;

export function ExUseFullScreen() {
  const { element, triggerFullScreen, exitFullScreen } = useFullScreen();

  return (
    <div>
      <img
        ref={element}
        src="https://64.media.tumblr.com/cd8f89e453df32f8ad5378b9fbb13c4b/tumblr_nxa1tlYvGm1u0r6j5o1_1280.jpg"
        alt="img"
      />
      <Button onClick={triggerFullScreen}>FULL SCREEN</Button>
      <Button onClick={exitFullScreen}>EXIT SCREEN</Button>
    </div>
  );
}

// useRef 를 통해 이미지 속성을 연결하고
// 이미지 속성을 크게 하는 triggerfullscreen 함수를 클릭 이벤트를 통해 연결하도록 구현
