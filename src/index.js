import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './store/reducers'

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
