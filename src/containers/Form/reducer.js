import { fromJS } from 'immutable'

const INIT_STATE = fromJS({
    projectName: 'react-family',
    developerNumber: 1,
    projectCycleType: 2,
    specificDate: ['2011-09-01 08:00:00', '2014-07-01 18:00:00'],
    dateNumber: 6,
    developFramework: 'react',
    difficulty: 4,
    customProjectCycle: {
        radioVal: undefined,
        specificDate: undefined,
        rangeDate: undefined
    }
})

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}