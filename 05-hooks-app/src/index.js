import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/01-useState/counter.css'
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDOM.render(
    <MultipleCustomHooks />,
  document.getElementById('root')
);
