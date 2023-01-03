import { useAsync } from "../custom_hook";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}
// promise 의 결과를 바로 data에 담기 때문에 getUsers 는 api 를 호출하고 받은 response 의 data를 추출하여 반환

// useAsync 로 fetching
function Users() {
  const [state, refetch] = useAsync(getUsers);
  // useAsync  api 를 호출하는 함수를 파라미터로 전달한다

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

export default function GetUser() {
  return (
    <div>
      <Users />
    </div>
  );
}
