import { useState, useTransition } from 'react';
  
let loadArry:(number|string)[] = new Array(15000).fill(0); //부하를 일으킬 10000개 짜리 배열.

const NoneUseTransition = () => {
    const [name, setName] = useState<string>('');

    return (
        <div style={{display:'flex', flexDirection:'column'}} >
            <input onChange={(e) => {
                 setName(e.target.value) // 부하가 일어나는 기능.
            }}/>
            <div>
                {
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
  
export default NoneUseTransition;