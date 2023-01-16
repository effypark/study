import React, { useState } from "react";
import styled from "styled-components";
import { useTransition } from "../custom_hook";

const Modal = styled.div<{ triggerAnimation: boolean }>`
  ${({ triggerAnimation }) =>
    !triggerAnimation &&
    "transform: translateY(-1rem); z-index: -1; opacity: 0"};

  transition: 300ms ease;
  width: 100%;
  max-width: 500px;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10;
  text-align: center;
  background-color: grey;
  border: none;
`;

const Button = styled.button`
  border: none;
  width: 130px;
  height: 60px;
  background-color: whitesmoke;
`;

export function ExUseTransition() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [shouldRenderCategory, handleTransitionEnd, triggerAnimation] =
    useTransition(modalOpen);

  const handleModal = () => {
    setModalOpen((prevState: boolean) => !prevState);
  };

  return (
    <div>
      <Button onClick={handleModal}>open</Button>
      {shouldRenderCategory && (
        <Modal
          onTransitionEnd={handleTransitionEnd}
          triggerAnimation={triggerAnimation}
        >
          <div>okay, let's get it</div>
          <Button onClick={handleModal}>close</Button>
        </Modal>
      )}
    </div>
  );
}

// Mount 시

// 1. 카테고리 버튼을 클릭해 modalOpen 상태가 true가 되면 mount 할 조건이 만족된다 (= condition이 true가 된다).
// 2. shouldRender가 true로 변경된다.
// 3. 컴포넌트가 mount 된다.
// 4. condition에 의존하는 useEffect 훅이 실행되고, condition이 true이기 때문에 isComplete 상태의 값이 true가 된다.
// 5. condition과 isComplete가 true이기 때문에 animationTrigger가 true로 변경된다.
// 6. triggerAnimation이 false일 때 적용되었던 스타일이 사라지면 transition이 발동된다.
// 7. transition이 종료되면 컴포넌트에 부착된 onTransitionEnd handler가 작동하지만 condition이 true이기 때문에 아무 일도 발생하지 않는다.

// Unmount 시

// 1. 카테고리 버튼을 modalOpen 상태가 false가 되면 unmount 할 조건이 만족된다 (= condition이 false가 된다).
// 2. shouldRender는 isComplete이 true이기 때문에 true로 유지된다.
// 3. condition에 의존하는 useEffect 훅이 실행되고, condition이 false이기 때문에 아무 일도 발생하지 않는다.
// 4. condition이 false이기 때문에 animationTrigger는 false가 된다.
// 5. triggerAnimation이 false일 때 스타일이 적용되면서 transition이 발동된다.
// 6. transition이 종료되면 컴포넌트에 부착된 onTransitionEnd handler가 작동하고 condition이 false이기 때문에 isComplete이 false로 변경된다.
// 7. condition과 isComplete가 모두 false가 되면 shouldRender가 false로 변경되고 컴포넌트가 unmount 된다.
