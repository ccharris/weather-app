import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import App from './App';
import weatherApp from './reducers'
import thunk from 'redux-thunk';

  const store = createStore(
    weatherApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  );


render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
