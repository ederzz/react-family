import {
    fromJS
} from 'immutable';
import * as at from './actionTypes';

const INIT_STATE = fromJS({
    sites: [{
        id: 'asda232',
        url: 'https://www.test.com',
        status: 'not-sure',
        updated: false
    }]
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
        case at.SCAN_FAIL:
            return state.update('sites', () => 
                state.toJS().sites.map(site => {
                    if(site.id === action.id) {
                        return Object.assign({}, site, {
                            weakness: site.weakness || 0,
                            updated: true
                        });
                    }
                    return site;
                })
            )
        case at.DELETE_SITE: 
            return state.update('sites', () => 
                state.toJS().sites.filter(site => site.id !== action.id)
        )
        default:
            return state;
    }
}