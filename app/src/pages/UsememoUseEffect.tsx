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
    
    const type_filter_set = [
      {id: "1", name: "빡공단"},
      {id: "2", name: "슈퍼z"},
      {id: "3", name: "연장"},
      {id: "4", name: "와디즈"},
      {id: "5", name: "일반"},
      {id: "6", name: "일반(실제금액0원)"},
      {id: "7", name: "제휴&제공"},
    ];
    const [typeFilter,setTypeFilter] = useState('');
    const changeHandler = (checked:any, name:string, value:string) => {
      let checkedList = Array.from(document.querySelectorAll('input[name="'+name+'"]:checked'));
      let checkedData = '';

      checkedList?.map((item: any) => {
        checkedData = checkedData + item.value;
      })
      console.log('checkedData:: ',checkedData);
      setTypeFilter(checkedData);

      let asd:Array<string> = ['1','2','3','4'];
      
      console.log('value:: ',value);
      console.log("");
    }

    return (
        <div>
            {useMemoHook}
            <button onClick={() => { setCount(count + 1) }}>Update Count</button>
            <button onClick={() => { setName('Peter') }}>Update Name</button>
            <button onClick={() => { setName('') }}>Name Reset</button>
            <p>{count}</p> {/*버튼을 누르는 즉시 적용됨*/}

            <form>
              <label htmlFor="type_filter">
                <input type="text" 
                  id='type_filter' 
                  name='type_filter'
                  onChange={()=>{}}
                  value={typeFilter}
                />
              </label>
              {
                type_filter_set.map((item,idx) => {
                    return (
                      <div key={idx}>
                        <input  
                          type="checkbox" 
                          id={"qw" + item.id}
                          name="qw"
                          value={item.id}
                          onChange={(e)=>{
                            changeHandler(e.currentTarget.checked, 'qw', item.id)
                        }}
                        />
                        <label htmlFor={"qw" + item.id}>{item.name}</label>
                      </div>
                    );
                })
              }
              <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default UsememoUseEffect;