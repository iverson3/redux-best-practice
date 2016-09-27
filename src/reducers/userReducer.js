/**
 * Created by iFan on 16/8/25.
 */

const initState = {
    userList: [
        // {id: 1, name: "stefan", age: 23, img: "", date: 0, sex: 1},
    ],
    count: 0,
    error: {
        isError: false,
        message: ""
    }
};

function userReducer(state = initState, action) {
    switch (action.type) {
        case "SET_NAME":
            return {
                ...state,
                name: action.name
            };
        
        case "FETCH_USER_SUCCESS":
            return Object.assign({}, state, {
                userList: [
                    ...state.userList,
                    action.data
                ],
                count: state.count + 1,
                error: {
                    isError: false,
                    message: ""
                }
            });

        case "FETCH_USER_ERROR":
            return Object.assign({}, state, {
                error: {
                    isError: true,
                    message: action.error.message
                }
            });

        case "ADD_USER": {
            return Object.assign({}, state, {
                userList: [
                    ...state.userList,
                    action.user
                ],
                count: state.count + 1
            });
        }
        
        case "GET_USER_LIST": {
            return state;
        }

        default:
            return state;
    }
}

export default userReducer;