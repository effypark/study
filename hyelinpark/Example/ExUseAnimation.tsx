import React from "react";
import { useAnimation } from "../custom_hook";

const Ball = ({ innerStyle }) => (
  <div
    style={{
      width: 100,
      height: 100,
      marginRight: "40px",
      borderRadius: "50px",
      backgroundColor: "#4dd5fa",
      ...innerStyle,
    }}
  />
);

export function ExUseAnimation() {
  // 시작 시점이 다른 애니메이션 값을 얻기 위해 3번 호출..

  const animation1 = useAnimation("elastic", 600, 0);
  const animation2 = useAnimation("elastic", 600, 150);
  const animation3 = useAnimation("elastic", 600, 300);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Ball
        innerStyle={{
          marginTop: animation1 * 200 - 100,
        }}
      />
      <Ball
        innerStyle={{
          marginTop: animation2 * 200 - 100,
        }}
      />
      <Ball
        innerStyle={{
          marginTop: animation3 * 200 - 100,
        }}
      />
    </div>
  );
}
