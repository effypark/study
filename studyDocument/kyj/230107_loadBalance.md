# react: loadBalance function

## 1. [useTransition](https://beta.reactjs.org/reference/react/useTransition)
React 18에 추가된 기능으로 페이지에 부하를 가져오는 작업에 대해 부하(프레임드랍)를 덜어줄 수 있는 기능입니다.
자동완성이나 엄청난 수의 단순 반복 작업을 진행하는 기능에 대해 많이 쓰여집니다.
그러나 어디까지나 우선순위 변경으로 인한 완화 정도의 기능이지 드라마틱한 부하 해결을 기대해서는 안돼는 부분입니다.

### [동작 원리]
 본래 브라우저는 한가지 씩 밖에 일을 처리하지 않습니다. 다만 매우 처리속도가 빠르기 때문에
여러가지를 순식간에 해내는 것 처럼 느껴지는 것입니다.
 하여 부하가 걸리는 작업에 대해 `useTransition`으로 감싸 처리해 준다면 react는 브라우저로 하여금
이를 작업 우선순위에서 뒤로 미루게 해줌으로서 중요한 부분을 먼저 해결한 뒤 해당 코드를 실행하여
작업 부하를 조금이나마 낮춰주게 합니다.

### [예제]
#### 강제 부하를 일으키도록 한 페이지를 준비합니다.
```
import { useState, useTransition } from 'react';

let loadArry:(number|string)[] = new Array(15000).fill(0); //부하를 일으킬 10000개 짜리 배열.

const UseTransition = () => {
    const [name, setName] = useState<string>('');

    return (
        <div style={{display:'flex', flexDirection:'column'}} >
            <input onChange={(e) => { setName(e.target.value) })
            }}/>
            <div>
                {
                    loadArry.map(() => {
                        return (
                            <div>{name}</div>
                        )
                    }
                }
            </div>
        </div>
    )
}
  
export default UseTransition;
```
#### 1-1 useTransition 적용해 봅니다.
```
# 강제 부하를 일으키도록 한 페이지.
import { useState, useTransition } from 'react';

let loadArry:(number|string)[] = new Array(15000).fill(0); //부하를 일으킬 10000개 짜리 배열.

const UseTransition = () => {
    const [name, setName] = useState<string>('');
    const [isPending, startTransition] = useTransition();

    return (
        <div style={{display:'flex', flexDirection:'column'}} >
            <input onChange={(e) => { 
                // 부하가 일어나는 기능.
                startTransition(() => { //startTransition로 감싸줍니다.
                    setName(e.target.value) 
                })
            }}/>
            <div>
                {
                    isPending ? '로딩중' :
                    loadArry.map(() => {
                        return (
                            <div>{name}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}
  
export default UseTransition;
```

## 2. [useDeferredValue](https://beta.reactjs.org/reference/react/useDeferredValue)

`useTransition`과 유사한 지연기능이지만 값을 대상으로 하기에 조금 덜 포괄적인 대상으로 하는 기능인 것 같습니다. 
 또한 대상은 문자열 및 숫자와 같은 기본 값 이거나 렌더링 외부에서 생성된 객체여야 합니다.
 
 렌더링 중에 새 객체를 생성하고 즉시 에 전달하면 렌더링 useDeferredValue할 때마다 달라집니다. 이 때 불필요한 배경 재렌더링이 발생하니 주의해야합니다.

 이 때문에 `useMemo `과의 콤비 플레이가 추천되어집니다.

### [예제]
위와 동일한 부하로 실험하였습니다.
```
import { useState, useDeferredValue,  useMemo } from 'react';

let loadArry:(number|string)[] = new Array(15000).fill(0); //부하를 일으킬 10000개 짜리 배열.

const UseDeferredValue = () => {
    const [name, setName] = useState<string>('');
    const deferredName = useDeferredValue(name); //1. name state를 useDeferredValue()로 감쌉니다.

    const useMemoHook = useMemo(()=>{ // 2-2. useMemo()입니다.
        return (
            <div>{deferredName}</div>
        )
      },[deferredName])// 2-1. useDeferredValue() 중 불필요한 랜더링을 막기 위한


    return (
        <div style={{display:'flex', flexDirection:'column'}} >
            <input onChange={(e) => { 
                // 부하가 일어나는 기능.
                setName(e.target.value) 
            }}/>
            <div>
                {
                    loadArry.map(() => {
                        return (
                            useMemoHook
                        )
                    })
                }
            </div>
        </div>
    )
}
  
export default UseDeferredValue;
```

[React: useTransition() vs useDeferredValue()](https://academind.com/tutorials/react-usetransition-vs-usedeferredvalue)
[useDeferredValue, useTransition](https://velog.io/@ktthee/React-18-%EC%97%90-%EC%B6%94%EA%B0%80%EB%90%9C-useDeferredValue-%EB%A5%BC-%EC%8D%A8-%EB%B3%B4%EC%9E%90)