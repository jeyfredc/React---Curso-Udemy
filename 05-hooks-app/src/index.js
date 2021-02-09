import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/01-useState/counter.css'
import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDOM.render(
    <SimpleForm />,
  document.getElementById('root')
);
