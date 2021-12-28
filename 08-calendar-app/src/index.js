import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CalendarApp } from './CalendarApp';

ReactDOM.render(
  <BrowserRouter>
    <CalendarApp />
  </BrowserRouter>,
  document.getElementById('root')
);

