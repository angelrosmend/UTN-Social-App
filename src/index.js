import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
      <Route path="/" component={App}/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
