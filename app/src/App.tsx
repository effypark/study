import React, { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  useEffect(()=>{
    console.log(Math.random());
  },[count])

  const useMemoHook = useMemo(()=>{
    return (
      <div>
        <p>useMemo {count}</p>
        <p>Name {name}</p>
      </div>
    )
  },[name])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {useMemoHook}
        <button onClick={() => { setCount(count + 1) }}>Update Count</button>
        <button onClick={() => { setName('Peter') }}>Update Name</button>
        <button onClick={() => { setName('') }}>Name Reset</button>
        <p>{count}</p> {/*버튼을 누르는 즉시 적용됨*/}
      </header>
    </div>
  );
}

export default App;
