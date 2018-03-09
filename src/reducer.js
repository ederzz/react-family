import {combineReducers} from 'redux';

import AppReducer from './containers/Home/reducer';
import xssFinder from './containers/XssFinder/reducer';

export default combineReducers({
    AppReducer,
    xssFinder
})
