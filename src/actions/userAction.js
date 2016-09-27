/**
 * Created by stefan.wang on 8/26/2016.
 */

let userActions = {
    setName: (name) => ({
        type: 'SET_NAME',
        name: name
    }),

    // 获取用户信息成功
    fetchUserSuccess: (data) => ({
        type: 'FETCH_USER_SUCCESS',
        data: data
    }),

    // 获取用户信息失败
    fetchUserError: (error) => ({
        type: 'FETCH_USER_ERROR',
        error: error
    }),

    deleteUser: (userid) => ({
        type: 'DELETE_USER',
        userid: userid
    }),
    
    addUser: (user) => ({
        type: 'ADD_USER',
        user: user
    }),

    getUserList: (condition) => ({
        type: 'GET_USER_LIST',
        condition: condition
    })
};

export default userActions;