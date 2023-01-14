import { useEffect, useState } from "react";

export function useTransition(
  condition: boolean
): [boolean, () => void, boolean] {
  const [isComplete, setComplete] = useState(false);

  useEffect(() => {
    if (condition) {
      setComplete(true);
    }
  }, [condition]);

  const shouldRender = condition || isComplete;
  const animationTrigger = condition && isComplete;

  const handleTransitionEnd = () => {
    if (!condition) setComplete(false);
  };

  return [shouldRender, handleTransitionEnd, animationTrigger];
}

// 이 훅의 prop은 한 개, 반환하는 것은 세가지

// prop으로는 애니메이션을 추가할 컴포넌트가 렌더링 될 조건을 전달한다.

// 반환은 첫 번째는 애니메이션을 고려했을 때 컴포넌트를 mount/unmount 할 지 여부를 결정할 boolean,
// 두 번째로는 컴포넌트의 transition이 종료되었을 때 그 사실을 훅에 알려줄 event handler,
// 셋째는 컴포넌트가 mount/unmount할 때임을 실제 컴포넌트에 전달해서 animation을 발동시킬 boolean 값이다.
