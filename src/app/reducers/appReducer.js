import { combineReducers } from 'redux';
import restApiArtistsReducer from './restApiArtistsReducer';
import restApiAlbumsReducer from './restApiAlbumsReducer';
import searchReducer from './searchReducer';
import albumReducer from './albumReducer';

export const appReducer = combineReducers({
    restApiArtistsReducer,
    restApiAlbumsReducer,
    searchReducer,
    likedAlbumsReducer: albumReducer,
});