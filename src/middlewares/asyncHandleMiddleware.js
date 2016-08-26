/**
 * Created by stefan.wang on 8/26/2016.
 */

// 自定义中间件 asyncHandleMiddleware
// 功能：专门负责进行异步处理的中间件

export default function asyncHandleMiddleware({dispatch, getState}) {
    return next => action => {
        // 根据情况，可在这dispatch指定的action
        // dispatch(action());

        switch (action.type) {
            case "MENU_CUT":
                console.log('MENU_CUT');
                console.log(getState());  // 获得应用当前所有state
                return next(action);
            default:
                return next(action);
        }
    }
}