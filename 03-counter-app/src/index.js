import React from 'react';
import ReactDom from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'


const divRoot = document.querySelector('#root');

ReactDom.render( <CounterApp /> , divRoot );
// ReactDom.render( <PrimeraApp /> , divRoot );
