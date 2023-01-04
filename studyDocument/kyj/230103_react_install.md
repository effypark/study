# Create React App
## 1. React App을 생성해보자

사전 요구 사양: Node 14.0.0 이상, npm 5.6 이상.

```
npx create-react-app my-app // js, jsx 환경
npx create-react-app app --template typescript // ts, tsx 환경
cd my-app
npm start
```
+my-app 대신 프로젝트 이름을 넣어주면 됩니다.

### step1 : npx create-react-app my-app
```
Need to install the following packages:
  create-react-app@5.0.1
Ok to proceed? (y) // create-react-app@5.0.1 설치를 진행하려고 합니다. 실행합니까?

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...
```

### step2 : cd my-app
설치가 완료되면 아래와 같이 친절히 다음 진행을 제안해줍니다.<br/>
본인이 설치한 프로젝트 명으로 디렉토리를 옮겨 봅니다. 
```
Success! Created app at ~\app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd app
  npm start
```
### step3 : npm start
내 프로젝트로 넘어왔다면 react가 정상적으로 가동하는지 로컬에서 확인해봅니다.
```
You can now view app in the browser.

  Local:            http://localhost:3000        
  On Your Network:  http://192.168.0.105:3000    

Note that the development build is not optimized.
To create a production build, use npm run build. 

webpack compiled successfully
```
### step4 : React On
리액트가 당신을 반길 것 입니다.<br/>
 <img src="https://velog.velcdn.com/images/harimrim/post/d9ce7e38-faa3-4a86-9052-82ed4fecf004/image.png" alt="npm=관리,npx=실행" width="250px"/>

## 초기 app.js 살펴보기
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```
### 1. <React.StrictMode>
npx로 CRA를 설치하게되면 자동으로 StrictMode로 설정되어집니다. <br/>

StrictMode는 아래와 같은 사전검열을 진행하여 줍니다. <br/>
\- 안전하지 않은 생명주기를 사용하는 컴포넌트 발견<br/>
\- 레거시 문자열 ref 사용에 대한 경고<br/>
\- 권장되지 않는 findDOMNode 사용에 대한 경고<br/>
\- 예상치 못한 부작용 검사<br/>
\- 레거시 context API 검사<br/>

또한 이는 개발모드에서만 활성화 되어지므로 빌드에는 영향을 주지 않습니다. 이러한 연유로 해당 코드를 지운다고 하더라도 실행에 있어서는 아무런 지장을 초래하지 않습니다.

### 2. reportWebVitals()
```
reportWebVitals(console.log)
```
성능 측정 도구로 위의 설명대로 `console.log`를 넣어주면 개발창으로 앱의 퍼포먼스 시간 등을 분석하여 객체 형태로 보여줍니다. 이 또한 추가적인 행태로 실행에 있어 불가결한 요소는 아닙니다.<br/>
<br/>

## 번외: npx란?

<div style="width:370px; background-color:#fff">
    <img src="https://blog.kakaocdn.net/dn/oPC9S/btrolUvHuVq/ypUxN40V56hSjZGZcZkoZ1/img.png" alt="npm=관리,npx=실행" width="350px"/>
</div>
<br/>
npm 5.2.0 버전부터 새로 추가된 도구로,

기존에 react app을 받을 때에는 'npm i -g create-react-app' 를 이용해 
global 디렉토리에 다운을 받아 사용하였는데,

이는 CRA(create-react-app)에 포함된 수 많은 의존성 라이브러리들이 컴퓨터에 계속 남아있으며, 버전 업데이트에 따라 변경된 사항이 있으면, 직접 글로벌 설치된 CRA패키지를 지우고 다시 설치를 해야하는 번거로움이 있었습니다.

이에 비해 npx는 다운받지 않고 노드 레지스트리에서 최신 버전의 CRA를 찾아 다운로드 없이 실행시켜 줍니다.

이는 npm을 이용한 설치와는 다르게 디스크 공간을 낭비하지 않으며, 항상 최신 버전을 사용할 수 있는 장점이 있습니다.

자동으로 최신 버전을 사용하게 되면서 혹시 캐치하지 못한 오류가 발생할 수도 있지 않을까 싶기도 하지만 대체로 이전 버전의 버그가 해결되는 경우가 더 많다고 합니다.

[참조]<br/>
[시작하기 – React](https://ko.reactjs.org/docs/getting-started.html)<br/>
[[짤막글] react strict 모드란??](https://velog.io/@kysung95/%EC%A7%A4%EB%A7%89%EA%B8%80-react-strict-%EB%AA%A8%EB%93%9C%EB%9E%80)<br/>
[[React] CRA 디폴트 파일인 reportWebVitals.html](https://gusehd66.tistory.com/entry/React-CRA-%EB%94%94%ED%8F%B4%ED%8A%B8-%ED%8C%8C%EC%9D%BC%EC%9D%B8-reportWebVitals)
[npx란 무엇인가?](https://geonlee.tistory.com/32)<br/>
[npx 란?](https://basemenks.tistory.com/232)<br/>
[npx를 써야하는 이유!](https://helloinyong.tistory.com/177)<br/>
[npm 과 npx 차이](https://ts2ree.tistory.com/254)<br/>
