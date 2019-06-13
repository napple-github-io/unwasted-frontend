import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import { promiseMiddleware } from 'promise-middleware-redux';
//bring in reducers 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  //reducers
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  )
);

