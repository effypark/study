import "./App.css";
import { useInputs, useConfirm, useAsync } from "../custom_hook";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

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

  // useAsync 로 fetching
  function Users() {
    const [state, refetch] = useAsync(getUsers, []);

    const { loading, data: users, error } = state;
    // 구조분해할당해서 사용. fetching 해온 데이터는 users 로 조회

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;

    return (
      <div>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              {user.username} ({user.name})
            </li>
          ))}
        </ul>
        <button onClick={refetch}>다시 불러오기</button>
      </div>
    );
  }

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
      <Users />
    </div>
  );
}

export default App;
