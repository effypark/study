import React from "react";

import { useLocalStorage } from "../custom_hook";

// useState와 유사하지만 첫 번째 인수가 local storage 에 담겨있는 값의 핵심
export function ExUseLocalStorage() {
  const [name, setName] = useLocalStorage<string>("name", "hyelin");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
    </div>
  );
}
