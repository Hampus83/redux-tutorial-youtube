import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import allReducer from './reducers';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

