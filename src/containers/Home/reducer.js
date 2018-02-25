import { fromJS } from 'immutable'

const INIT_STATE = fromJS({
    name: 'jzx',
    a: {
        b: 123
    }
});

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}