import {
    fromJS
} from 'immutable';
import * as at from './actionTypes';

const INIT_STATE = fromJS({
    sites: [
        {
            url: 'wwww.baidu.com/wangpan',
            status: 'not-sure',
            id: `${Date.now() * Math.random()}`,
            time: Date.now()
        },
        {
            url: 'wwww.baidu.com/zhidao',
            status: 'not-sure',
            id: `${Date.now() * Math.random()}`,
            time: Date.now()
        },
        {
            url: 'wwww.baidu.com/music',
            status: 'not-sure',
            id: `${Date.now() * Math.random()}`,
            time: Date.now()
        },
    ]
}); 

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case at.FETCH_ALL_SITE:
            return state.update('sites', () => action.data);
        case at.UPDATE_SITE_STATUS:
            return state.update('sites', () => 
                state.toJS().sites.map(site => {
                    if(site.id === action.id) {
                        return Object.assign({}, site, {
                            status: action.data.weakness && 'danger' || 'safe'
                        });
                    }
                    return site;
                })
            )
        default:
            return state;
    }
}