import { useRef, useEffect, useCallback } from "react";

export function useScrollFadeInWith(direction = "up", duration = 1, delay = 0) {
  const dom = useRef<any>();

  const handleDirection = (name: string) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0%, 50%, 50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]: any) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: any;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);
    }

    return () => observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
}

// 기존에 구현되어있는 useScrollFadeIn hook 의 경우 항상 아래에서 위로 동작하며, Duration과 Delay를 설정 해 줄 수 없다
// 커스텀 하고자 하는 설정들을 hook을 사용 할 때 Props로 넘겨주고 지정해 준다면 좀 더 세세하고 다양한 FadeIn Animation을 적용 할 수 있다
