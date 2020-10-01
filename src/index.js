import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import startMockAPI from "./mockAPI/startMockAPI";

startMockAPI();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
