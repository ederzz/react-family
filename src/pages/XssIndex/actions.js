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

export const updateSiteStatus = (url, id, done = () => {}) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:3003/xssTest', {
            url
        });

        if(res.data === false) {
            dispatch({
                type: at.SCAN_FAIL,
                id,
            });
        } else {
            dispatch({
                type: at.UPDATE_SITE_STATUS,
                id,
                data: res.data
            });
        }
    } catch(e) {
        console.log(e.message);
    }
    done();
}

export const deleteSite = (id, done=() => {}) => async dispatch => {
    try {
        await axios.delete('http://localhost:3003/xssData', {
            params: {
                id
            }
        })  
        
        dispatch({
            type: at.DELETE_SITE,
            id
        })
        done()
    } catch (error) {
        done(error)
        console.log(error.message)
    }
}