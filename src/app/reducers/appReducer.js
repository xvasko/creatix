import { combineReducers } from 'redux';
import restApiArtistsReducer from './restApiArtistsReducer';
import restApiAlbumsReducer from './restApiAlbumsReducer';
import renderReducer from './renderReducer';
import albumReducer from './albumReducer';

export const appReducer = combineReducers({
    restApiArtistsReducer,
    restApiAlbumsReducer,
    renderReducer,
    albumReducer,
});