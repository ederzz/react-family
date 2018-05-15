import axios from 'axios'
import * as at from './actionTypes'

export const getWeaknessList = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:3003/getXss')
        dispatch({
            type: at.GET_WEAKNESS_LIST,
            data: res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const filterWeaknessList = key => async dispatch => {
    try {
        const res = await axios.get('http://localhost:3003/filterXss', {
            params: {
                key
            }
        })

        dispatch({
            type: at.FILTER_WEAKNESS_LIST,
            data: res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}