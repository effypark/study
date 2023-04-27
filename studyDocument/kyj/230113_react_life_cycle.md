# React:: life cycle

![qwe](https://velog.velcdn.com/images%2Fminbr0ther%2Fpost%2F7f8ed738-2f24-46bd-ab9f-2c7e7d7976e2%2FUntitled-3.png)

## Class Componet 생명주기

### 1. 마운트(mount)

#### 1-1. constructor
컴포넌트 생성자 메서드, 컴포넌트가 생성되면 가장 먼저 실행되는 메서드
this.props, this.state에 접근이 가능하고 리액트 요소를 반환합니다.

#### 1-2. getDerivedStateFromProps
props로부터 파생된 state를 가져옵니다. 즉 props로 받아온 것을 state에 넣어주고 싶을때 사용합니다.

#### 1-3. render
컴포넌트를 렌더링하는 메서드입니다.

#### 1-4. componentDidMount
컴포넌트가 마운트 됨, 즉 컴포넌트의 첫번째 렌더링이 마치면 호출되는 메서드 입니다.
이 메서드가 호출되는 시점에는 화면에 컴포넌트가 나타난 상태입니다.
여기서는 주로 DOM을 사용해야 하는 외부 라이브러리 연동, 해당 컴포넌트에서 필요로하는 데이터를 ajax로 요청, 등의 행위를 합니다.

### 2.업데이트(updating)

#### 2-1. getDerivedStateFromProps
컴포넌트의 props나 state가 바뀌었을때도 이 메서드가 호출됩니다.

#### 2-2. shouldComponentUpdate
컴포넌트가 리렌더링 할지 말지를 결정하는 메서드입니다.

React.memo와 유사함, boolean 반환으로 결정됩니다.
#### 2-3. componentDidUpdate
컴포넌트가 업데이트 되고 난 후 발생합니다.

의존성 배열이 변할때만 useEffect가 실행하는 것과 같습니다.
```
useEffect(() => {
	console.log("count or exampleProp changed");     
},[count, exampleProp]);
```
### 3. 언마운트(unmount)
컴포넌트가 화면에서 사라지는 것을 의미합니다.

#### 3-1. componentWillUnmount
컴포넌트가 화면에서 사라지기 직전에 호출됩니다.
여기서 주로 DOM에 직접 등록했었던 이벤트를 제거하고, 만약에 setTimeout을 걸은 것이 있다면 clearTimeout을 통하여 제거를 합니다.
추가적으로, 외부 라이브러리를 사용한게 있고 해당 라이브러리에 dispose기능이 있다면 여기서 호출해주시면 됩니다.
```
useEffect(()=>{
	console.log("");     
    return(() => exampleAPI.unsubscribe());
})
```
  
\- 리액트는 JSX를 사용하기를 권장합니다.  
이를 사용해
html을 render할 부분에서 데이터를 바인딩하고(뿌려주고)
componet화 한 구조물들을 잘 조립하여 
사용자로 하여금 완성된 페이지를 볼수 있게 한다.  
  
      
### JSX란?
\- JSX(JavaScript XML)는 Javascript에 XML을 추가한 확장한 문법.
```
function App() { // js의 흔한 함수에
  let test = "JSX가 뭐죠?"
  
  return (
    // XML을 추가했다.
    <div className="title" style={ { color: 'red'} }>//object형태로 스타일을 적용. camell case
       어디까지 알아보고 오셨죠?
    </div>
  );
}
```

### XML이란?
 \- json과 같이 데이터를 구조화한 것. 
 \- 오픈소스.

[차이]  
```
1. json
 - 구분방식 : 중괄호 '{}'
 - 주석 삽입 불가
 - 오탈자 엄격. 발생시 null

2. xml
 - 구분방식 : tag '</>'
 - 주석 삽입 가능
 - 오탈자에 대해 약간의 융통성 있음.
```
[참조]<br>
[리액트 라이프사이클](https://velog.io/@minbr0ther/React.js-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4life-cycle-%EC%88%9C%EC%84%9C-%EC%97%AD%ED%95%A0)<br>
[JSX란?](https://goddaehee.tistory.com/296)<br>
[위키: XML](https://ko.wikipedia.org/wiki/XML)<br>
[코딩애플](https://www.youtube.com/watch?v=qocQ7ekeMI4)