import {
    fromJS
} from 'immutable';
import * as at from './actionTypes';

const INIT_STATE = fromJS({
    sites: [
        {
            url: 'wwww.baidu.com/wangpan',
            status: 'not-sure'
        },
        {
            url: 'wwww.baidu.com/zhidao',
            status: 'not-sure'
        },
        {
            url: 'wwww.baidu.com/music',
            status: 'not-sure'
        },
    ]
}); 

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case at.FETCH_ALL_SITE:
            return state.update('sites', () => action.data);
        default:
            return state;
    }
}