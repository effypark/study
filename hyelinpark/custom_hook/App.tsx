import "./App.css";
import { useInputs, useConfirm } from "../custom_hook";

function App() {
  // useInputs 사용
  const [{ userName, nickName }, onChange, reset] = useInputs({
    userName: "",
    nickName: "",
  });

  const inputValue = { userName, nickName };

  // useConfirm 사용
  const onCancel = () => console.log("abort");
  const onConfirm = () => reset();
  const message: string = "Are you sure?";
  const confirmDelete = useConfirm({ message, onCancel, onConfirm });

  console.log(inputValue);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input name="userName" onChange={onChange} value={userName} />
      <input name="nickName" onChange={onChange} value={nickName} />
      <div>useConfirm hook test</div>
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
}

export default App;
