# react with script Tag

일 없을 거라 생각했지만 예상외로 쓰이는 `<script>`태그. 꼭 [Google Analytics](https://analytics.google.com/analytics/web/provision/#/provision)가 아니더라도 특정 페이지에 자바스크립트 코드를 넣는 경우가 있었기에 해당 부분을 공유하고자 글을 씁니다.

## 1. 외부 js파일을 공유 받은 경우.
js코드가 아닌 url형태로 외부 js파일을 공유 받은 경우는 구글링 했을 때 가장 많이 나오는 예제입니다.

```
useEffect(() => {
    const script = document.createElement("script") // tag Element를 만듭니다.
    script.src = "수령한 js url 주소." // 주소를 입력합니다.
    script.async = true // 해당 스크립트 비동기 실행 명시.
    document.body.appendChild(script) // 생성된 태그를 body에 붙여줍니다.
},[])
```
\+ `script.async`는 브라우저가 페이지를 파싱하는 동안에도 스크립트가 사용가능해지면 곧바로 실행하여 스크립트가 나머지 페이지와는 비동기적으로 실행됨을 명시하는 기능입니다.

또한 해당 기능은 `<script>` 요소가 외부 스크립트를 참조하는 경우에만 사용할 수 있습니다.

[참조]
[script.async](http://www.tcpschool.com/html-tag-attrs/script-async)

## 2. js 코드를 공유 받은 경우.
뭔가 본페이지에서 약간의 데이터를 얹어 제공해야 하는 경우 입니다. 해당 부분은 구글링 실력의 부재인지 삽질을 많이 했지만 단순히 생각해보니 javascript에 답이 있었습니다.

```
useEffect(() => {
    const script = document.createElement("script") // tag Element를 만듭니다.
    script.innerHTML = "전달받은 코드"
    document.body.appendChild(script) // 생성된 태그를 body에 붙여줍니다.
},[])
```
대략적인 구조는 1번 조건과 크게 다르지 않으나 src을 입력해주는 대신 생성한 `<script>`태그 안에 내용을 채워 넣어주는 점이 다르다 할 수 있겠습니다.

### 2-1. `Uncaught SyntaxError: Unexpected token '<' error`

여러 이유로 js파일이 아닌 단순 html로 인식해버리면서 발생하는 오류 입니다. 해당 부분은 'text/javascript' 를 'text/jsx'로 변경하여 해결 할 수 있습니다.

```
ex)
~
const script2 = document.createElement("script");
script2.src = "./example.js";
script2.type = "text/jsx";
~
```

[Reactjs_ Unexpected token '_' Error - Stack Overflow](https://stackoverflow.com/questions/20905227/reactjs-unexpected-token-error)