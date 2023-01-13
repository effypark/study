import { useRef, useCallback, useEffect } from "react";

export function useScrollFadeIn() {
  const dom = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

    if (entry.isIntersecting) {
      // 원하는 이벤트를 추가하면 됨

      if (current) {
        current.style.transitionProperty = "opacity transform";
        current.style.transitionDuration = "1s";
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = "0s";
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      }
    }
  }, []);

  // window.addEventListener 를 통해 직접 스크롤 이벤트를 핸들링할 경우에 성능이 저하되고 (scroll 의 움직임이 조금이라도 감지될 때마다 이벤트가 발생해서 성능 저하)
  // 이러한 퍼포먼스 성능 저하로 인해 intersection observer 를 사용
  useEffect(() => {
    const { current } = dom;
    if (current) {
      // IntersectionObserver 에 동작하게 될 함수와 observer 세팅 값들을 넘겨줌
      //  threshold 는 number 나 Array<number> 로 정의할 수 있고, default = 0
      // number 는 target element 의 노출 비율을 말하는 것(화면에 노출되는 비율), 0.7 은 70% 를 말함. 70% 정도 노출 되었을 때 handScroll 함수가 실행된다
      // Array<number> 는 각각의 비율로 노출 될 때 마다 함수가 실행된다. [0.3, 0.7, 0.8] ...

      let observer = new IntersectionObserver(handleScroll, {
        threshold: 0.7,
      });
      observer.observe(current);

      return () => observer?.disconnect();
    }
  }, [handleScroll]);

  // 컴포넌트에 적용할 때 spread 와 style 속성을 추가해야 하기 때문에 object 로 감싸야 한다

  // 외부의 영향을 최소화 하기 위해 style 은 아래와 같이 직접 주입
  // 기존에 opacity 를 설정했다면 레이아웃이 깨질 수도 있음
  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: "translate3d(0, 50%, 0)",
    },
  };
}

// scroll 타이밍에 따라 dom 이 fadeIn 되는 animation 은 세가지로 나눌 수 있다.
// 1. FadeIn Animation 을 구현한다
// 2. 특정 스크롤 시점에 Animation 을 실행 시킬 수 있도록 트리거 이벤트를 만든다
// 3. Animation 트리거 이벤트를 Dom 에 저장한다.

// 이 훅은 3번에 해당하는 것으로, 트리거 이벤트를 Dom 에 저장하기 위해 ref 를 사용해야 한다
// Ref 는 포커스, 미디어 재생, 애니메이션을 직접적으로 실행 시키기 위해 외부에서 Dom 을 제어할 수 있도록 도와준다

// 이벤트 트리거가 발생하기 전에는
// style: {
//   opacity: 0,
//   transform: "translate3d(0, 50%, 0)",
// },
// 으로 원하는 위치 아래에 숨겨놨다가 트리거가 발생할 때
// current.style.opacity = 1;
// current.style.transform = "translate3d(0, 0, 0)";
// 와 같이 위치를 옮겨준다
