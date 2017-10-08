import { createStore, applyMiddleware } from 'redux';
import { createLogger }   from 'redux-logger';
import thunk from 'redux-thunk';
import apiReducer from './reducers/apiReducer';

const store = createStore(apiReducer, {}, applyMiddleware(thunk, createLogger()));

export default store;