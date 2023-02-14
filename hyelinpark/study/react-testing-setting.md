### 1. Jest + TypeScript + babel + Testing Library 시작하기

<br />

1. jest 설치하기

```
yarn add --save-dev jest
```

<br />

2. Babel 관련 모듈 설치하기

- 이미 babel이 설치되어 있다면 babel-jest만 설치하면 된다. babel-jest는 es6구문인 test file을 es5로 트랜스파일 하기 위해 사용된다.

```
yarn add --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-react
```

<br />

3. babel plugin 설치하기

- .ts,.tsx 파일을 트랜스파일 해주는 babel plugin
- 이 또한 Jest가 직접적으로 의존하는 모듈이 아니다. TypeScript를 사용하지 않는다면 설치할 필요는 없다.

<br />

```
yarn add --save-dev @babel/preset-typescript
```

<br />

4. babel.config.js 파일 생성하고 작성하기

<br />

```
//babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
```

<br />

5. typeChecking 기능 관련 모듈 설치하기, 적용하기

- 일반적으로 test 파일은 타입검사 기능을 수행하지 않는다.
- 하지만 원한다면 ts-jest 모듈로 TypeChecking 기능을 수행할 수 있다.

<br />

```
yarn --save-dev ts-jest
```

- ts-jest를 이용하여 typeChecking 기능을 사용하려면 jest configuration를 정의해주어야 한다.
- configuration의 방법은 아래 Jest’s configuration 정의하기에서 ..

<br />

6. Jest 관련 Type 정의 모듈 설치하기

- test 파일에서 사용되는 jest 관련 Type이 정의되어 있다.

```
yarn add --save-dev @types/jest
```

<br />

7. react-test-renderer 설치하기

- 스냅샷 테스트를 도와주는 react-test-renderer 도 공식문서에서 가이드하고 있다.

```
yarn add --save-dev react-test-renderer
```

<br />

8. jest-environment-jsdom 설치하기

- Jest의 테스트 환경 중 하나인 jsdom을 다운로드 해야한다.

<br />

```
yarn add --save-dev jest-environment-jsdom
```

<br />

9. Jest’s configuration 정의하기

TypeScript 환경에서의 Jest 설치는 이렇게 하면 된다.
Jest 공식문서에서는 시작 가이드에 configguration을 포함하고 있지 않다. 하지만 React 에서 진행되는 테스트는 Node환경이 아닌 브라우저 환경에서도 테스트 할 수 있어야 한다. 따라서 package.json 안에 jest:{} 필드를 삽입하거나, jest.config.js를 만들어서 테스트 환경을 Node로 할것인지 jsdom으로 할 것인지 정의해야한다.

<br />

📌 참고 : jest configuration

<br />

- 해당 예제는 package.json 내에서 jest의 설정을 정의한다.

<br />

```
//package.json
{
  ...
  "devDependencies": {
    ...
  },
  "dependencies": {
    ...
  },
  "jest" : {                    // 이 부분
    "testEnvironment": "jsdom"  // Default : "node"
  }                             //
}
```

<br />

10. jest를 실행하기 위해 script 추가하기

- Jest를 간단하게 실행하기 위해 package.json의 scripts필드에 정의해준다.

<br />

```
//package.json
{
  ...
  "scripts": {        //
    "test": "jest"    // 이부분
  },                  //
  "devDependencies": {
    ...
  },
  "dependencies": {
    ...
  },
  "jest" : {
    ...
  }
}
```

<br />

11. @testing-library/react 설치하기

<br />

📌 참고 : Testing Library 공식문서

```
yarn add --save-dev @testing-library/react
```
