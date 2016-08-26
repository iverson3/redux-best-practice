/**
 * Created by iFan on 16/8/25.
 */
function userReducer(state = {}, action) {
    switch (action.type) {
        case "SET_NAME":
            // 方案二
            // let obj = {
            //     name: action.name
            // };
            // Object.assign(obj, state);
            // return obj;

            // 方案一
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
}

export default userReducer;