import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let reRender = (state) => ReactDOM.render(
  <React.StrictMode>
    <App state = {state} />
  </React.StrictMode>,
  document.getElementById('root')
);

export default reRender