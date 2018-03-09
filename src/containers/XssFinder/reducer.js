import {
    fromJS
} from 'immutable';
import * as at from './actionTypes';

const INIT_STATE = fromJS({
    sites: []
}); 

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case at.FETCH_ALL_SITE:
            return state.update('sites', () => action.data);
        default:
            return state;
    }
}