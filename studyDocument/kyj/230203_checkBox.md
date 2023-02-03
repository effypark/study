# react : checkBox 01
전체 선택 추가.

```
import { useState } from "react";

export default function App() {
  const [isAllChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(2).fill(false));

  const handleAllCheck = () => {
    setAllChecked((prev) => !prev);
    let array = new Array(2).fill(!isAllChecked);
    setCheckedState(array);
  };

  const handleMonoCheck = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const checkedLength = updatedCheckedState.reduce((sum, currentState) => {
      if (currentState === true) {
        return sum + 1;
      }
      return sum;
    }, 0);
    setAllChecked(checkedLength === updatedCheckedState.length);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={isAllChecked}
          onChange={() => handleAllCheck()}
        />
        all check
      </div>
      <div>
        <input
          type="checkbox"
          checked={checkedState[0]}
          onChange={() => handleMonoCheck(0)}
        />
        check 0
      </div>
      <div>
        <input
          type="checkbox"
          checked={checkedState[1]}
          onChange={() => handleMonoCheck(1)}
        />
        check 1
      </div>
    </div>
  );
}

```