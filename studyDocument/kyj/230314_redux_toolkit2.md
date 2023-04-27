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
configureStore 함수는 리덕스 라이브러리의의 createStore 함수를 추상화한 것입니다. 기존의 번거로웠던 리덕스 설정을 간편하게 할 수 있도록 해주고 설정시 디폴트로 redux-thunk와 DevTools를 제공해줍니다.


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
