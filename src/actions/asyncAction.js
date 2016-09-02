/**
 * Created by iFan on 16/8/26.
 */
import $ from 'jquery'
import userActions from './userAction'


let asyncActions = {
    asyncAction_1: (message) => {
        return function (dispatch) {
            setTimeout(function () {
                // 发出一个action (异步action)
                dispatch({
                    type: 'ASYNC_ACTION',
                    message
                });
            }, 3000);
        }
    },

    asyncFetchUser: (postData) => {
        return function (dispatch) {
            // $.ajax({
            //     type: 'post',
            //     url : 'http://www.example.com/getinfo.php',
            //     data: postData,
            //     success: function(data) {
            //         // post异步请求成功后 分发成功对应的action
            //         dispatch(userActions.fetchUserSuccess(data));
            //     },
            //     error: function(error) {
            //         // post异步请求出错后 分发失败对应的action
            //         dispatch(userActions.fetchUserError(error));
            //     }
            // });
            
            window.setTimeout(function () {
                let data = {id: 4, name: 'www', age: 233};
                let error = { code: 432, message: 'connect time out'};
                dispatch(userActions.fetchUserSuccess(data));
                // dispatch(userActions.fetchUserError(error));
            }, 2000);
        }
    }
};

export default asyncActions;