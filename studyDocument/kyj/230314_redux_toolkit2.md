# redux-toolkit: STORE
전체 state를 저장하는 저장소 입니다. 1 project 1 store가 권장되어집니다
```
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modules/modalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
```

## configureStore
Reducer에서 반환된 새로운 state를 Store라는 객체로 정리해 관리하는곳입니다
Store는 Redux Toolkit configureStore에 객체 형식으로 reducer를 전달하여 만들 수 있습니다.또한 기존에 createStore비슷하지만 ! 여기서 주의할 점은  {reducer: rootReducer} 로 만들어 주어서 넣어야합니다 ! 


```
export type RootState = ReturnType<typeof store.getState>
```
스토어 자체에서 `RootState` 및 `AppDispatch` 유형을 추론합니다.
Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

```
export type AppDispatch = typeof store.dispatch
```
Redux 스토어에서 반환되는 디스패치 함수에 대한 유형 정의를 만드는 데 사용됩니다.

기본 디스패치 기능을 사용하여 이러한 작업을 디스패치할 때 디스패치하는 작업 유형이 애플리케이션에 정의된 작업 유형에 대해 확인되지 않습니다. 즉, 응용 프로그램에 정의되지 않은 작업을 실수로 발송할 수 있으며, 이로 인해 예기치 않은 동작이 발생할 수 있습니다.

그렇기 때문에 Redux Toolkit에서 생성된 AppDispatch 유형 정의를 사용하여 애플리케이션에 정의된 작업만 디스패치하는지 확인할 수 있습니다. 이렇게 하면 유형 안전성이 향상되고 잘못된 유형의 작업을 발송하여 발생하는 오류를 방지할 수 있습니다.
