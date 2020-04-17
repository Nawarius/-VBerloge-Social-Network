import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store,subscribe} from './redux/store.js';


let reRender = (state) => ReactDOM.render(
  <React.StrictMode>
    <App store = {state} />
  </React.StrictMode>,
  document.getElementById('root')
);
reRender(store);
subscribe(reRender);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





	
