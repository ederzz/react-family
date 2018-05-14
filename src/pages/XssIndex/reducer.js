import {
    fromJS
} from 'immutable';
import * as at from './actionTypes';

const INIT_STATE = fromJS({
    sites: []
}); 

/* eslint-disable no-mixed-operators */
export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case at.FETCH_ALL_SITE:
            return state.update('sites', () => action.data);
        case at.UPDATE_SITE_STATUS:
            return state.update('sites', () => 
                state.toJS().sites.map(site => {
                    if(site.id === action.id) {
                        return Object.assign({}, site, {
                            status: action.data.weakness && 'danger' || 'safe',
                            weakness: action.data.weakness,
                            updated: true
                        });
                    }
                    return site;
                })
            )
        default:
            return state;
    }
}