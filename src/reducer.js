import {combineReducers} from 'redux';

import AppReducer from './containers/Home/reducer';
import xssFinder from './pages/XssIndex/reducer';
import visualPlatform from './pages/ChartsPage/reducer';

export default combineReducers({
    AppReducer,
    xssFinder,
    visualPlatform
})
