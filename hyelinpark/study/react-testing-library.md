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
