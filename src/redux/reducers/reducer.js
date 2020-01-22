const defaultState = {
    test: ''
}

const scheduler = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_TEST': {
            return {
                ...state,
                test: action.test
            }
        }
        default:
            return state
    }
}

export default scheduler;