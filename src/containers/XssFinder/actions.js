import * as at from './actionTypes';

export const fetchAllSites = () => async dispatch => {

    dispatch({
        type: at.FETCH_ALL_SITE,
        data: [
            {
                url: 'www.'
            }
        ]
    })
}