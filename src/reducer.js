import {combineReducers} from 'redux';

import AppReducer from './containers/Home/reducer';
import xssFinder from './pages/XssIndex/reducer';

export default combineReducers({
    AppReducer,
    xssFinder
})
