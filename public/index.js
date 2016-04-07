import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { GrowlerComponent } from 'flash-notification-react-redux';
import reduxThunk from 'redux-thunk'

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise,logger)(createStore);
// console.log('window:'+window)
window.React = React
window.ReactDOM = ReactDOM

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('body'));
