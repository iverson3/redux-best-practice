/**
 * Created by iFan on 16/8/25.
 */
function asyncReducer(state = {}, action) {
    switch (action.type) {
        case 'ASYNC_ACTION':
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    }
}

export default asyncReducer;