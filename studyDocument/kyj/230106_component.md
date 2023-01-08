# React: Functional Component
## Component
컴포넌트를 정의 할 때는 보통 EcmaScipt 6 에 도입된 [Class 문법](https://www.w3schools.com/js/js_es6.asp#mark_Class)을 사용하며, 크게 두가지로 나눌 수 있다고 보는데 이는 `Class Components` 와 `functional Components`가 있습니다.


### 1. Class Components
라이프사이클 API를 사용해야 하거나,
state 를 사용하는 경우에는 꼭 Class Components를 사용 해야합니다.
`+ state는 object 형태로 되어있으며, 변경되는 데이터를 담을 수 있습니다.`

Class Component의 기본 구조는 아래와 같습니다.
```
#ClassComponent.ts
import React from 'react';

interface MyProps { // 받아온 데이터에 대한 정의
  message: string;
};
type MyState = { // 해당 Class에서 돌아가는 데이터에 대한 정의
  count: number;
};

class ClassComponent extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

export default ClassComponent;
```

#### 1-1 constructor와 super 의 생략
이 부분은 사실 아래와 같이 `.js`에서 ClassComponent를 선언할 때,
`constructor`와 `super` 문을 이용하여 작성하던 형식이었으나,
```
constructor(props){
    super(props);
    this.state = {
      count: '',
    }
  }
```
`.ts`로 작성 시 해당 부분을 축약 생략된 형식으로 아래처럼 생략하여 표기할 수 있으며, 놀랍게도 같은 기능을 수행합니다. 대신 어노테이션을 필히 입력해 주어야 합니다.
```
state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };
```

### 2. functional Component
단순히 `props`만 넘겨 받아 뷰를 렌더링만 해주는 역할만 수행하는 컴포넌트라면
`functional Component`로 만들어 줄 수 있습니다. Class Component가 가조립 형태나 조립 키트 라는 느낌이라면 Funtional Component 보다는 조금 더 조립형 블럭에 가까운 느낌의 컴포넌트라고 생각되어 집니다.

functional Component의 기본 구조는 아래와 같습니다.
```
# FunctionalComponent
interface FunctionalComponentProps = {
  name: string;
}; // props 타입 선언

const FunctionalComponent = ({name}: FunctionalComponentProps) => {
  return (
    <div>
      {name}
    </div>
  )
}

export default FunctionalComponent; // 출력해줍니다.
```

[참조]
[React TypeScript Tutorial - 17 - Class Component](https://www.youtube.com/watch?v=JOhIMtMxjpU)
[클래스 구성 요소](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/Class_Components/)
[React Typescript - Class Components](https://www.w3schools.io/learn/react-typescript-Class-Components/)
[ES6 Class 문법:국문](https://beomy.tistory.com/15)
[type&interface](https://yceffort.kr/2021/03/typescript-interface-vs-type)
[TypeScript를 적용하면 constructor를 쓰지 않는다? ](https://helloinyong.tistory.com/162)
[React: Class Components vs. Stateless Functional Components](https://iamtimsmith.com/blog/class-components-vs-stateless-functional-components/
)