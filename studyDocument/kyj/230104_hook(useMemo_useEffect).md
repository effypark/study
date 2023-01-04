#TypeScript

TypeScript는 정적언어이다. 이름에서 느껴지듯 `type(자료형)을 가지고 있는 Script`라는 것이다.
정적언어라는 것은 위에서 언급한 `Type을 컴파일 시에 결정`하는 것 인데, 
이는 사전에 받을 값의 타입이 지정 되어있어 컴파일이 빠르고 오류를 캐치하는 것이 수월해진다는 특징이 있습니다.
단 초기 단계에서의 기초적 오류를 잡는 다는 것이지 결론적으로 오류를 만능으로 잡아준다는 것으로 이해하면 안된다.

이와는 반대로 동적언어는 실행 시에 Type을 결정하기에 작성에는 품이 덜들고
편하게 느껴질 수 있으나 어느 시점에선가 분명히 Type Error와 마주하게 될 것입니다.

[참조]
[Statically Typed Vs Dynamically Typed Languages _ Baeldung on Computer Science](https://www.baeldung.com/cs/statically-vs-dynamically-typed-languages)
[Luavis' Dev Story - Static type의 맹점](https://luavis.me/web/the-shocking-secret-about-static-types)

useState 
```
const [target,SetTarget] = useState<type>(defalutValue);
```
- setState 메서드(반환된 배열의 두 번째 요소) 호출 시 다시 렌더링을 유발합니다. useMemo 또는 useEffect와 같은 종속성이 없습니다.

useMemo
```
const noRender = useMemo(()=>{
    return (
      <>
      </>
    )
  },[targetValue])
```
- 구성 요소 렌더링 중에 실행되며, 종속성 배열의 요소가 변경되는 경우에만 값을 다시 계산합니다.
단 종속성 배열이 비어 있으면 한 번만 다시 계산됩니다.
배열을 생략하면 렌더링 할 때마다 다시 계산됩니다. 
변경된 건이 없다면 함수를 호출해도 다시 렌더링되지 않습니다.
 
대체로 무거운 랜더링의 경우에 useMemo로 감싸서 최적화한다고는 하나,
useMemo자체가 이전값과 현재값을 비교한 뒤 돌아가기 때문에 
너무 과도하게 무거운 것은 다른 방식으로 해결하는 것이 권장됩니다.

useEffect
```
useEffect(() => {
    ~
}, [targetValue]);

```
- 모든 구성 요소가 화면에 렌더링된 후 실행되며, 종속성이 변경되지 않으면 캐시된 값을 반환합니다.
종속성 배열을 아예 선언하지 않는다면 구성 내 변경 자체가 트리거가 되어 실행되고,
종속성 배열에 값이 존재 하다면 배열의 요소가 변경되었을 때마다 실행되지만,
배열은 존재하나 값이 생략된 경우에는 초기 마운트 시 한 번만 실행 됩니다. (정리 함수를 반환하는 경우 마운트 해제).


useMemo, useEffect가 발화시점 이외에는 거의 동일한 기능처럼 느껴지나
개인적인 생각으로는  useMemo는 모달과 같이 특정한 상황에서 보여져야하고 내용이 갱신되어야하는
경우등의 특정상황에서 적용하면 좋을 것 같으며, useEffect는 즉시 갱신되어 보여져야하는 좀 더 보편적인
상황에서 적용하는 것이 좋을 것 같습니다.

[javascript - React_ useEffect vs useMemo vs useState](https://stackoverflow.com/questions/56347639/react-useeffect-vs-usememo-vs-usestate)
[후크 API 참조](https://reactjs.org/docs/hooks-reference.html#usestate)
[Difference between useEffect, useMemo and useCallback in React _ by Arun Rajeevan _ Medium](https://arunrajeevan.medium.com/difference-between-useeffect-usememo-and-usecallback-in-react-39e504432ff3)
[React js tutorial for beginners - useMemo vs useEffect](https://www.youtube.com/watch?v=aQovZNRpKcU)