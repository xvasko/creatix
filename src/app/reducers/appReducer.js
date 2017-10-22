import { combineReducers } from 'redux';
import restApiArtistsReducer from './restApiArtistsReducer';
import restApiAlbumsReducer from './restApiAlbumsReducer';
import searchReducer from './searchReducer';

export const appReducer = combineReducers({
    restApiArtistsReducer,
    restApiAlbumsReducer,
    searchReducer,
});