import { combineReducers } from 'redux';
import restApiArtistsReducer from './restApiArtistsReducer';
import restApiAlbumsReducer from './restApiAlbumsReducer';

export const appReducer = combineReducers({
    restApiArtistsReducer,
    restApiAlbumsReducer,
    // insert additional reducers here
});