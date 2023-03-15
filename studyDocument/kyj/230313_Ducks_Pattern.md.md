# redux-toolkit: Ducks PatternPermalink
Rudux를 사용하기 위해선 항상 actionTypes, actions, reducer 이 셋을 다함께 추가해야하고, redux 공식 문서대로라면 actions와 reducer를 다른 파일에서 관리하지만 거의 대부분 actions와 reducer는 하나의 짝이 돼서 함께 동작합니다.

그렇기에 actionTypes, actions, reducer를 한 곳으로 모아 하나의 모듈로 관리하자는 것이 Ducks Pattern의 핵심입니다.

```
// widgets.js

// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
```

[4가지 규칙]  
\- 반드시 reducer() 함수를 export default 해야 합니다.  
\- 반드시 모듈의 action 생성자들을 함수형태로 export 해야 합니다.  
\- 반드시 npm-module-or-app/reducer/ACTION_TYPE 형태의 구조를 가져야합니다.  
```
ex)모듈이름/리듀서명/액션명
const SET_FILTER_CONDITIONS = "shelter/filter/SET_FILTER_CONDITIONS";
```
\- action 타입들을 UPPER_SNAKE_CASE로 export 할 수 있습니다.  


## createAction 을 통한 액션생성 자동화

```
[수정 전]
export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

[수정 후]
export const increment = createAction(types.INCREMENT);
export const decrement = createAction(types.DECREMENT);
```
위 코드를 실행시 
```
increment(3)
```` 
createAction으로 사전 지정해준 'types.INCREMENT' 를 가지고, 파라미터로 전달받은 값을 액션의 payload 값으로 설정 해줍니다. 따라서 아래와 같이 실행됩니다.

```
{
    type: 'INCREMENT',
    payload: 3
}
```

액션이 갖고있을 수 있는 변수를 payload 로 통일하므로서, 액션을 생성하는것을 자동화합니다. payload는 모든 파라미터를 포함하기에 복수일 때는 아래와 같이 객체 형태로 담습니다.
```
setColor({index: 5, color: '#fff'})

[결과]
{
    type: 'SET_COLOR',
    payload: {
        index: 5,
        color: '#fff'
    }
}

```
다만 코드를 봤을때 해당 액션생성자가 파라미터로 필요한 값이 뭔지 모를 수 있다는 치명적인 단점이 있습니다. 이를 해결하기 위해 주석을 달긴하지만...좀 그렇긴 합니다.