import { useAsyncWithSkip } from "./userAsyncWithSkip";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}
// promise 의 결과를 바로 data에 담기 때문에 getUsers 는 api 를 호출하고 받은 response 의 data를 추출하여 반환

// 필요할 때만 data fetching
// useAsync 로 fetching
function UsersWithSkip() {
  const [state, refetch] = useAsyncWithSkip(getUsers, true, []);
  // useAsyncWithSkip 함수는 세가지 파라미터를 받아올 수 있다.. 1. api 를 호출하는 함수와 2. skip 유무 3. 의존성배열

  const { loading, data: users, error } = state;
  // 구조분해할당해서 사용. fetching 해온 데이터는 users 로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;
  // users 가 없을 때 불러오기 버튼이 렌더링. 해당 버튼을 누르면 getUsers 함수 동작(비동기처리)

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

export default function GetUserWIthSkip() {
  return (
    <div>
      <UsersWithSkip />
    </div>
  );
}
