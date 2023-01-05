# [React-router-dom](https://reactrouter.com/en/main/start/tutorial)

## 1. Install
```
npm install react-router-dom localforage match-sorter sort-by
```
[react-router-dom ver.6.4](https://www.youtube.com/watch?v=kGtHwLzmMBQ&list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx&t=2051s)로 넘어오면서 인스톨에 뭐가 붙어 있습니다.
아무리 공식 사이트 이더라도 뭔지는 알고 설치해야 할 것 같아 짚고 넘어가려 합니다.

### 1-1. [localforage](https://www.npmjs.com/package/localforage)
localStorage와 유사한 것 처럼 보이는 스토리지 백엔드로 IndexedDB(WebSQL 또는 LocalStorage 대체)를 저장공간으로 사용합니다.

### 1-2. [match-sorter](https://www.npmjs.com/package/match-sorter)
가지고 있는 배열 중에서 사용자가 입력한 값과 유사한 데이터를 보여줍니다. 간단하게 말하면 자동완성 기능이라고 할 수 있겠습니다.

### 1-3. [sort-by](https://www.npmjs.com/package/sort-by)
```
노드와 브라우저 모두에서 기본 'Array.sort()'에 대한 비교기 함수를 생성하는 유틸리티입니다. 여러 속성별로 정렬할 수 있습니다.
```
이게 뭔소리인가 했지만 하단 예제를 보아하니 배열 내 key값을 타겟팅한 후 해당 value 값을 기준으로 정렬해주는 모양입니다.

그냥 뭉탱이로 가져온 데이터를 검색기능을 api없이 구현하고자 할 때 직접 손질해서 쓸 수 있게 해주겠다는 것 같습니다.