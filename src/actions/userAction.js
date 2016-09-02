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
    })
};

export default userActions;