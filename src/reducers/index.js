import counter from './counter';
import isLogged from './isLogged';
import { combineReducers } from 'redux';

let reducer = combineReducers({counter, isLogged});

export default reducer;