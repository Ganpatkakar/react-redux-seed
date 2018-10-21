export default function commonReducer(state = {}, action) {
    switch (action.type) {
        case 'Initial_state':
            return Object.assign(state, { ready: action.payload })
        case 'test_state':
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state
    }
}