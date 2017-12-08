import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import App from './App';
import weatherApp from './reducers'
import thunk from 'redux-thunk';

  const store = createStore(
    weatherApp,
    applyMiddleware(thunk)
  );


render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
