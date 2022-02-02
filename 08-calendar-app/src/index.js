import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CalendarApp } from './CalendarApp';
import './styles.css'

ReactDOM.render(
  <BrowserRouter>
    <CalendarApp />
  </BrowserRouter>,
  document.getElementById('root')
);

