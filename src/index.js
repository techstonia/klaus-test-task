import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import startMockAPI from './mockAPI/startMockAPI';
import store from './redux/store';
import {Provider} from 'react-redux';

startMockAPI();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
