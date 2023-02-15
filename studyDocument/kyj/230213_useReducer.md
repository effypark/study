# react: useReducer

## useReducer
`useReducer`는 흔히 `useState` 훅과 비교 되어 집니다. 그러나 상태 업데이트와 관련된 더 복잡한 논리를 처리할 수 있습니다. 리듀서 함수와 초기 상태라는 두 가지 인수를 취합니다. 그런 다음 후크는 구성 요소의 현재 상태와 디스패치 함수를 반환합니다.

```
const [state, dispatch] = useReducer(reducer, initialState);
```
useReducer의 내부 로직을 이해하기 위해서는 useReducer의 세 요소를 알고 있어야 하는데, 세 요소는 Dispatch, Action, Reducer이며, 각각 역할은 아래와 같습니다.

```
reducer → state를 update 해준다.  
dispatch → Reducer에게 요구하는 행위  
action → Dispatch(요구) 내용
```

즉, 상태 변화 이벤트가 발생하면 dispatch → reducer 순서로 호출되고, reducer는 action을 참고해서 상태값을 변화시킵니다.

```
예제)
const reducer = (state, action) => {
  switch(action.type) {
    case 'add-list':
      // action.payload.data1 를 활용해서 상태 update
    case 'delete-list':
      // action.payload.data2 를 활용해서 상태 update
    case 'mark-list':
      // action.payload.data3 를 활용해서 상태 update
    default:
      return state;
  }
}
```