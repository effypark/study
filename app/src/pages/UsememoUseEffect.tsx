import React, { useEffect, useMemo, useState } from 'react';

export interface UsememoUseEffectProps {};

const UsememoUseEffect: React.FunctionComponent<UsememoUseEffectProps> = props => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');
  
    useEffect(()=>{
      console.log(Math.random());
    },[count])
  
    const useMemoHook = useMemo(()=>{
      return (
        <div>
          <p>useMemo {count}</p>{/*이전 값을 들고 있을 수 있습니다.*/}
          <p>Name {name}</p>
        </div>
      )
    },[name])// 종속값이 변경되기 전까지는 말이죠.
    
    return (
        <div>
            {useMemoHook}
            <button onClick={() => { setCount(count + 1) }}>Update Count</button>
            <button onClick={() => { setName('Peter') }}>Update Name</button>
            <button onClick={() => { setName('') }}>Name Reset</button>
            <p>{count}</p> {/*버튼을 누르는 즉시 적용됨*/}
        </div>
    )
}

export default UsememoUseEffect;