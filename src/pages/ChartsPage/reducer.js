import { fromJS } from 'immutable'
import * as at from './actionTypes'

const INIT_STATE = fromJS({
    weaknessList: []
})

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case at.GET_WEAKNESS_LIST:
            return state.update('weaknessList', () => action.data)
        case at.FILTER_WEAKNESS_LIST:
            return state.update('weaknessList', () => action.data)
        default:
            return state
    }
}