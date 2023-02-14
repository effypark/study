### 1. Custom hook Testing

- custom Hooks는 일반적인 함수처럼 테스트 코드를 작성할 수 없다. 그 이유는 Custom Hooks는 React에서 제공하는 Hooks를 이용한 함수이기 때문이다
- 일반적인 함수처럼 테스트코드를 작성할 수 없기 때문에 라이브러리를 추가적으로 설치해줘야 한다

<br />

```
yarn add @testing-library/react-hooks
```

- react-hooks 라이브러리를 추가 설치

<br />

### 1-1. useState 를 이용한 custom hook 테스트

<br />

- useToggle.tsx

<br />

> **테스트 케이스**

- 기존에 작성한 `useToggle.tsx` 는 길이가 2인 배열을 리턴 [state, toggle]
- 매개변수로 초기값을 입력하지 않으면 기본 state 값은 false 로 설정
- 매개변수로 초기값을 입력하면 state 에 입력한 값이 설정됨
- toggle 함수를 이용해서 toggle 할 수 있음

<br />

```
import { useToggle } from "../useToggle";

describe("useToggle", () => {
  test("useToggle은 길이가 2인 배열을 리턴한다. (state, toggle)", () => {
    const { result } = renderHook(() => useToggle(false));
    expect(result.current).toHaveLength(2);
  });

  test("매개변수로 초기값을 입력하지 않으면 기본 state 값은 false 로 설정", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  test("매개변수로 초기값을 입력하면 state 에 입력한 값이 설정됨", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  test("toggle 함수를 이용해서 toggle 할 수 있음", () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });

});


```

<br />

- `render hook` 함수를 이용해서 custom hook 을 실행시키면 return 값이 result 에 담겨있다
- useToggle hook 에서 return 값이 [state, toggle] 이기 때문에 이 값이 result 에 담겨져 있다

📌 테스트 코드 내부에서 컴포넌트 렌더링 및 상태 변경은 `act` 함수 내부에서 실행해야 한다

<br />

- useFetch.tsx

<br />

```
// 테스트용도의 최소한의 useFetch hook 구현체

export const useFetch = <T = any>({
  url = '',
  autoFetch = true,
  method = 'get',
}) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const fetchData = useCallback(() => {
    if (url) {
      httpRequest(url)
        [method]()
        .then((res) => {
          setData({ ...res, isLoaded: true });
        })
        .finally(() => {
          setIsLoaded(true);
        });
    }
  }, [url, method]);

  useEffect(() => {
    if (autoFetch && !data) {
      fetchData();
    }
  }, [autoFetch, data, fetchData]);

  return { data, isLoaded, fetchData };
};
```

<br />

우선 훅 내부에서 호출하는 api를 포함하는 디렉토리를 import 한다

<br />

`import * as api from '~/apis';`

<br />

```
import * as api from '~/apis';

// httpRequest 객체를 mocking 해줌

jest.mock('~/apis', () => ({
  httpRequest: jest.fn(() => ({ get: () => Promise.resolve() })),
}));


describe('useFetch', () => {
  // url이 없으면 호출하지 않음

  it('useFetch empty string api => not fetch', async () => {
    const { result } = renderHook(() => useFetch({ url: '' }));
    expect(result.current?.data).toEqual(null);
    const spy = jest.spyOn(api, 'httpRequest');
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('useFetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch({ url: 'some' }),
    );

    //처음엔 data의 초기값인 null 이어야 한다
    expect(result.current?.data).toEqual(null);
    await waitForNextUpdate();
    // effect를 기다렸다가,

    // 데이터 로드가 끝남을 확인
     expect(result.current?.data).toEqual({ isLoaded: true });

    // 데이터 로드가 끝났으므로, httpRequest는 1번 호출 되어야 함
    const spy = jest.spyOn(api, 'httpRequest');
    expect(spy).toHaveBeenCalledTimes(1);

    // 의도적으로 다시 fetch 함수 호출
    result.current?.fetchData();
    await waitForNextUpdate();

    // httpRequest가 한번 더 호출됐는지 확인
    expect(spy).toHaveBeenCalledTimes(2);
  });
});

```
