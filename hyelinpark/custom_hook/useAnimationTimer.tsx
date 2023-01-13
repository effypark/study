import { useState, useEffect } from "react";

export function useAnimationTimer(duration = 1000, delay = 0) {
  const [elapsed, setTime] = useState(0);

  useEffect(
    () => {
      let animationFrame, timerStop, start;

      // 각 애니메이션에서 실행될 함수
      function onFrame() {
        setTime(Date.now() - start);
        loop();
      }

      // 다음 animation frame 에서 onFrame() 호출
      function loop() {
        animationFrame = requestAnimationFrame(onFrame);
      }

      function onStart() {
        // 지속 시간이 delay 되면 작업을 중지하도록 제한 시간을 설정
        timerStop = setTimeout(() => {
          cancelAnimationFrame(animationFrame);
          setTime(Date.now() - start);
        }, duration);
        // Start the loop
        start = Date.now();
        loop();
      }

      // 지정한 지연 시간 이후에 시작 (defaults to 0)
      const timerDelay = setTimeout(onStart, delay);

      // clean-up
      return () => {
        clearTimeout(timerStop);
        clearTimeout(timerDelay);
        cancelAnimationFrame(animationFrame);
      };
    },
    [duration, delay] // duration 이나 delay 가 변경될 때마다 재실행
  );
  return elapsed;
}
