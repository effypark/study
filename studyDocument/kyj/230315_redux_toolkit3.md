# redux-toolkit: CreateEntityAdapter

## CreateEntityAdapter란?
createEntityAdapter 는 normalized state structure 위에서 CRUD를 구현하기 위해 미리 만들어진 리듀서와 셀렉터를 생성하는 함수입니다.

createEntityAdapter 의 getInitialState 를 이용하면 아래와 같은 형태의 normalize된 스테이트 오브젝트를 기본 생성합니다.
```
{
  // The unique IDs of each item. Must be strings or numbers
  ids: []
  // A lookup table mapping entity IDs to the corresponding entity objects
  entities: {
  }
}
```

## Parameters
하나의 오브젝트 형태로 parameter를 받는데, 안에 2개의 optional fields가 있습니다.

### selectId
하나의 Entity instance를 받는 함수로, 고유 ID 필드가 들어있는 내부 값을 반환합니다. 제공되지 않으면 디폴트는  entity => [entity.id](http://entity.id) 로 제공 됩니다.

### sortCoparer
두 개의 인스턴스를 받는 콜백 함수이고, Array.sort()와 같은 방식으로 동작합니다. (addOne(), updateMany()와 같이 CRUD function을 통해 state가 변경될 때만 sorting 됩니다.