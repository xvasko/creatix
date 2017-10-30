import { createStore, applyMiddleware } from 'redux';
import { createLogger }   from 'redux-logger';
import thunk from 'redux-thunk';
import { appReducer } from './reducers/appReducer';

const store = createStore(appReducer, {}, applyMiddleware(thunk, createLogger()));

store.subscribe(() => {
    localStorage.setItem('likedAlbumsIds', JSON.stringify(store.getState().albumReducer.likedAlbumsIds));
});

export default store;