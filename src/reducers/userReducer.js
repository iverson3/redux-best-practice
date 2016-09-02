/**
 * Created by iFan on 16/8/25.
 */

const initState = {
    userList: [
        {id: 1, name: "stefan", age: 23},
        {id: 2, name: "tom", age: 24},
        {id: 3, name: "jim", age: 21}
    ],
    count: 3,
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

        default:
            return state;
    }
}

export default userReducer;