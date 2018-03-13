import axios from 'axios';
import * as at from './actionTypes';

export const fetchAllSites = () => async dispatch => {
    const res = await axios.get('http://localhost:3003/pupp');

    dispatch({
        type: at.FETCH_ALL_SITE,
        data: res.data
    })
}