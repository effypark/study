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