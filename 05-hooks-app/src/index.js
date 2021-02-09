import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/01-useState/counter.css'
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDOM.render(
    <CounterWithCustomHook />,
  document.getElementById('root')
);
