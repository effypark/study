import { useToggle } from "../custom_hook";

export function ExUseToggle() {
  // useToggle 은 current state 와 toggler 기능을 하는 함수를 반환하게 된다

  const [isTextChanged, setIsTextChanged] = useToggle();
  return (
    <>
      <button onClick={setIsTextChanged}>click !</button>
      {isTextChanged ? "Toggled" : "Click to Toggle"}
    </>
  );
}
