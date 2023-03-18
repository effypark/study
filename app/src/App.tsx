import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/config';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
