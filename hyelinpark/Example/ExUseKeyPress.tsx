import React from "react";
import { useKeyPress } from "../custom_hook/useKeyPress";

export function ExUseKeyPress() {
  // 모니터링할 각 키에 대한 hooks 호출
  const happyPress: boolean = useKeyPress("h");
  const sadPress: boolean = useKeyPress("s");
  const robotPress: boolean = useKeyPress("r");
  const foxPress: boolean = useKeyPress("f");

  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
}
