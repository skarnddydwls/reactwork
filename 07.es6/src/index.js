import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ArrowFun from './arrowFunction/ArrowFunction';
import Assign from './assignment/Assignment';
import CallbackFunc from './callbackFunction/CallbackFunc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/*<ArrowFun/>
    <Assign/> */}
    <CallbackFunc/>
  </React.StrictMode>
);

reportWebVitals();
