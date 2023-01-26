### 1. react-testing-library

> - 모든 테스트를 DOM 위주로 진행합니다.
> - 컴포넌트의 props 나 state 를 조회하는 일은 없습니다. 컴포넌트를 리팩토링하게 될 때에는, 주로 내부 구조 및 네이밍은 많이 바뀔 수 있어도 실제 작동 방식은 크게 바뀌지 않습니다. react-testing-library는 이 점을 중요시 여겨서, 컴포넌트의 기능이 똑같이 작동한다면 컴포넌트의 내부 구현 방식이 많이 바뀌어도 테스트가 실패하지 않도록 설계되었습니다.
> - react-testing-library 에는 정말 필요한 기능들만 지원을 해줘서 매우 가볍고, 개발자들이
>   일관성 있고 좋은 관습을 따르는 테스트 코드를 작성 할 수 있도록 유도해줍니다.

<br />

### 1-1. 설치

`yarn add react-testing-library jest-dom`
<br />
`@types/jest`

- jest-dom 은 jest 확장으로서, DOM 에 관련된 matcher 를 추가해줍니다
- types/jest 도 추가적으로 설치

### 1-2. Test

`import 'react-testing-library/cleanup-after-each'; `
<Br />
`import 'jest-dom/extend-expect';`

<br />

- react-testing-library 에서는 리액트에서는 DOM 시뮬레이션을 위한 [JSDOM](https://github.com/jsdom/jsdom) 이라는 도구를 사용하여 document.body 에 리액트 컴포넌트를 렌더링합니다. clean-up-after-each 를 불러오면, 각 테스트 케이스가 끝날때마다 기존에 가상의 화면에 남아있는 UI 를 정리합니다

- 추가적으로, 그 아래에는 jest-dom/extend-expect 를 불러와서 jest 에서 DOM 관련 matcher 를 사용 할 수 있게 해줍니다

<br />

```
import React from 'react';

const Profile = ({ username, name }) => {
  return (
    <div>
      <b>{username}</b>&nbsp;
      <span>({name})</span>
    </div>
  );
};

export default Profile;
```

- 컴포넌트를 하나 만듭니다
- `<App />`과 같은 가장 최상위 파일에서 해당 컴포넌트를 import 하고 렌더링이 잘 되는 지 확인을 먼저 해봅니다

<br />

```
import React from 'react';
import { render } from 'react-testing-library';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="hyelin" name="박혜린" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    const utils = render(<Profile username="hyelin" name="박혜린" />);
    utils.getByText('hyelin'); // hyelin 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText('(박혜린)'); // (박혜린) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/박/); // 정규식 /박/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
```

<br />

- yarn run start 해서 실행
- react-testing-library 에서 컴포넌트를 렌더링 할 때에는 **render()** 라는 함수를 사용합니다
- 이 함수가 호출되면 그 결과물 에는 DOM 을 선택 할 수 있는 다양한 쿼리들과 container 가 포함되어있는데, 여기서 **container** 는 해당 컴포넌트의 최상위 DOM 을 가르킵니다. 이를 가지고 스냅샷 테스팅을 할 수도 있습니다

<br />

### 2. 스냅샷 테스팅

- 스냅샷 테스팅이란, 렌더링된 결과가 이전에 렌더링한 결과와 일치하는지 확인하는 작업을 의미합니다
- 코드를 저장하면 `src/__snapshots__/Profile.test.js.snap` 라는 파일이 다음과 같이 만들어집니다

<br />

```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`<Profile /> matches snapshot 1`] = `
<div>
  <div>
    <b>
      hyelin
    </b>

    <span>
      (
      박혜린
      )
    </span>
  </div>
</div>
`;
```

- 컴포넌트가 렌더링됐을 때 이 스냅샷과 일치하지 않으면 테스트가 실패합니다
- 만약에 스냅샷을 업데이트 하고싶다면 테스트가 실행되고 있는 콘솔 창에서 `u` 키를 누르면 됩니다

<br />

### 3. 쿼리

- `render 함수` 를 실행하고 나면 그 결과물 안에는 다양한 쿼리 함수들이 있는데 이 쿼리 함수들은 react-testing-library 의 기반인 dom-testing-library 에서 지원하는 함수들입니다
- 이 쿼리 함수들은 `Variant` 와 `Queries` 의 조합으로 네이밍이 이루어져있다

<br />

### 3-1. Variant

- **getBy** :
  getBy\* 로 시작하는 쿼리는 조건에 일치하는 DOM 엘리먼트 하나를 선택합니다. 만약에 없으면 에러가 발생합니다.

- **getAllBy** :
  getAllBy\* 로 시작하는 쿼리는 조건에 일치하는 DOM 엘리먼트 여러개를 선택합니다. 만약에 하나도 없으면 에러가 발생합니다.

- **queryBy** :
  queryBy\* 로 시작하는 쿼리는 조건에 일치하는 DOM 엘리먼트 하나를 선택합니다. 만약에 존재하지 않아도 에러가 발생하지 않습니다.

- **queryAllBy** :
  queryAllBy\* 로 시작하는 쿼리는 조건에 일치하는 DOM 엘리먼트 여러개를 선택합니다. 만약에 존재하지 않아도 에러가 발생하지 않습니다.

- **findBy** :
  findBy\* 로 시작하는 쿼리는 조건에 일치하는 DOM 엘리먼트 하나가 나타날 때 까지 기다렸다가 해당 DOM 을 선택하는 Promise 를 반환합니다. 기본 timeout 인 4500ms 이후에도 나타나지 않으면 에러가 발생합니다.

- **findAllBy** :
  findBy\* 로 시작하는 쿼리는 조건에 일치하는 DOM 엘리먼트 여러개가 나타날 때 까지 기다렸다가 해당 DOM 을 선택하는 Promise 를 반환합니다. 기본 timeout 인 4500ms 이후에도 나타나지 않으면 에러가 발생합니다.

<br />

### 3-2. Queries

- **ByLabelText** : label 이 있는 input 의 label 내용으로 input 을 선택합니다

```
<label for="username-input">아이디</label>
<input id="username-input" />

const inputNode = getByLabelText('아이디');
```

- **ByPlaceholderText** : placeholder 값으로 input 및 textarea 를 선택합니다

```
<input placeholder="아이디" />;

const inputNode = getByPlaceholderText('아이디');
```

- **ByText** : 엘리먼트가 가지고 있는 텍스트 값으로 DOM 을 선택합니다
- `const div = getByText(/^Hello/);` 처럼 텍스트 값에 정규식을 넣어도 된다

```
<div>Hello World!</div>;

const div = getByText('Hello World!')
```

- **ByAltText** : `alt 속성`을 가지고 있는 엘리먼트 (주로 `img`) 를 선택합니다

```
<img src="/awesome.png" alt="awesome image" />;

const imgAwesome = getByAltText('awesomse image');
```

- **ByTitle** : `title 속성`을 가지고 있는 DOM 혹은 `title 엘리먼트를 지니고있는 SVG` 를 선택 할 때 사용합니다

```
<p>
  <span title="React">리액트</span>는 짱 멋진 라이브러리다.
</p>

<svg>
  <title>Delete</title>
  <g><path/></g>
</svg>

const spanReact = getByTitle('React');
const svgDelete = getByTitle('Delete');
```

- **ByDisplayValue** : `input, textarea, select` 가 지니고 있는 현재 값을 가지고 엘리먼트를 선택합니다
