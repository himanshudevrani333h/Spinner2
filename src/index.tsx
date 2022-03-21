import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from "./App_style"
ReactDOM.render(
  <React.Fragment>
    <GlobalStyle/>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

