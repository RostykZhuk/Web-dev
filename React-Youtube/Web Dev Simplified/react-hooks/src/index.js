import React from 'react';
import ReactDOM from 'react-dom/client';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
import UseContext from './useContext/UseContext';
import UseReducer from './useReducer/UseReducer';
import Advanced from './useReducer/Advanced';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Advanced />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
