import { combineReducers } from 'redux';
import favoriteReducer from './favoritesReducer';


import movieReducer from './movieReducer';

export default combineReducers({
    movieReducer: movieReducer,
    favoriteReducer: favoriteReducer
})