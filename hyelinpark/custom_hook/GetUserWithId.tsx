// API 를 요청할 때 파라미터가 필요한 경우
// ex) https://블라블라/users/1

import { useAsync, useAsyncWithSkip } from ".";
import { useState } from "react";

async function getUser(id: number) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

export function Users() {
  const [userId, setUserId] = useState(null);
  const [state, refetch] = useAsyncWithSkip(getUsers, true, []);

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {userId && <GetUserWithId id={userId} />}
    </>
  );
}

export default function GetUserWithId({ id }) {
  const [state] = useAsync(() => getUser(id.id), [id.id]);
  const { loading, data: user, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

// 파라미터를 포함해서 api 를 요청해야 하는 경우 useAsync 에 파라미터를 포함하여 함수를 호출하는 새로운 함수를 만들어낸다
// Users 에서 각 id 값을 useState 를 사용하여 state 를 갱신하고, 그 id 값 === 즉 state 를 파라미터로 넘겨 클릭한 항목(사용자) 의 id 를 userId 값으로 갱신하고
// 해당 userId 의 정보만을 불러온다
