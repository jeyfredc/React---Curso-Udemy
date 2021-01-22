import React from 'react';
import ReactDom from 'react-dom';
import PrimeraApp from './PrimeraApp';


const divRoot = document.querySelector('#root');

ReactDom.render( <PrimeraApp /* saludo="Hola, soy Iron Man" */ /> , divRoot );