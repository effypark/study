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