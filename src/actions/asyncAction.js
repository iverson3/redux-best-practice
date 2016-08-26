/**
 * Created by iFan on 16/8/26.
 */


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
    }
};

export default asyncActions;



