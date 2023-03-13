# redux-toolkit

## 사용하는 이유
redux를 정말 아무 라이브러리 없이 사용할 때 
```
actionType 정의 -> 액션 함수 정의 -> 리듀서 정의
```
위와 같은 과정을 거쳐 1개의 액션을 생성합니다. 

너무 많은 코드가 생성되니 `redux-actons` 라는 것을 사용하게 되었고, 

불변성을 지켜야하는 원칙 때문에 `immer`를 사용하게되고,   
store 값을 효율적으로 핸들링하여 불필요 리렌더링을 막기 위해 `reselect`를 쓰게 되었으며,  
비동기를 수월하게 하기위해, `thunk`나 `saga`를 설치하여 redux를 더 효율적으로 사용하게 됩니다. 

위와 같이 불편을 해결하기 위한 기본적인 라이브럴리만 해도 대략 4~5개의 라이브러리를 설치하여야 했기 때문에,

redux에서 공식적으로 `redux-toolkit`이라는 통합 라이브러리를 제공하게 되었습니다.

```
[대표적 기능]
- redux-action
- reselect
- immer의 produce
- redux-thunk
- Flux Standard Action 강제화
- Type Definition
```

`redux-toolkit`은 위에서 언급한 기능 중 'saga'를 제외한 모든 기능을 지원합니다. 또한 typeScript 사용자를 위해 action type, state type 등 TypeScript를 사용할 때 필요한 Type Definition을 공식 지원합니다. 

## redux-action
```
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

function counter(state = 0, action) {
  switch (action.type) {
    case increment.type:
      return state + 1;
    case decrement.type:
      return state - 1;
    default:
      return state;
  }
}

const store = configureStore({
  reducer: counter
});

document.getElementById("increment").addEventListener("click", () => {
  store.dispatch(increment());
});
```
`createSlice` 라는 내장 함수 사용 시 'createAction'을 통해 따로 액션타입을 정의하지 않아도 `자동으로 액션타입을 만들어줍니다`.