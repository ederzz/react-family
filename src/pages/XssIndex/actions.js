import axios from 'axios';
import * as at from './actionTypes';

export const fetchAllSites = (url, done = () => {}) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:3003/getLinks', {
            requestUrl: url
        })

        if(res.data) {
            done()
        }

        dispatch({
            type: at.FETCH_ALL_SITE,
            data: res.data.map(d => {
                d.updated = false
                return d
            })
        })
    } catch(e) {
        console.log(e.message)
    }
}

export const updateSiteStatus = (url, id) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:3003/xssTest', {
            url
        });

        dispatch({
            type: at.UPDATE_SITE_STATUS,
            id,
            data: res.data
        });
    } catch(e) {
        console.log(e.message);
    }
}