import React from "react";
import { useScrollFadeIn } from "../custom_hook";

export function ExUseScrollFadeIn() {
  const animatedItem = useScrollFadeIn();

  return (
    <div>
      <h1>contents</h1>
      <Contents {...animatedItem} />
    </div>
  );
}
