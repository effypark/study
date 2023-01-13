import { useAnimationTimer } from "./useAnimationTimer";

export function useAnimation(easingName = "linear", duration = 500, delay = 0) {
  // useAnimationTimer hook 은 애니메이션 프레임마다 useState를 호출한다
  // 부드러운 애니메이션을 가능하게 하기 위해 useAnimationTimer hook 을 사용해서 경과 시간을 제공하고 자주 렌더링 하게 한다

  const elapsed = useAnimationTimer(duration, delay);
  // Amount of specified duration elapsed on a scale from 0 - 1
  const n: number = Math.min(1, elapsed / duration);
  // 지정된 easing 함수를 기반으로 변경된 값을 반환
  return easing[easingName](n);
}

// easing 함수 (선형, 탄성 등) 을 사용해서 모든 값에 부드럽게 애니메이션 작용 !!
const easing = {
  linear: (n: number) => n,
  elastic: (n: number) =>
    n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15),
  inExpo: (n: number) => Math.pow(2, 10 * (n - 1)),
};
