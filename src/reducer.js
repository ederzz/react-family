import {combineReducers} from 'redux'

import AppReducer from './containers/Home/reducer'
import formData from './containers/Form/reducer'
import xssFinder from './pages/XssIndex/reducer'
import visualPlatform from './pages/ChartsPage/reducer'

export default combineReducers({
    AppReducer,
    xssFinder,
    visualPlatform,
    formData
})
