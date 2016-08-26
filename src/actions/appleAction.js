/**
 * Created by stefan.wang on 8/25/2016.
 */
import ajax from '../services/ajax'
import $ from 'jquery'
import {apple_prefix} from '../common/config'

// 业界标准的action格式
// return {
//     type: 'ACTION_NAME',
//     payload: "bool | number | string | object", /*action的负载，可以是数据或 error 对象*/
//     error: "bool",    /*指明该action是否是一个以 error 为负载的action*/
//     meta: "string"    /*action元数据， 包含解释该action含义的信息*/
// };



let appleActions = {

    weight: 200,

    // 非普通action, 如thunk，一般会以dispatch普通action结束。我们reducer只需要处理狭义上的普通action
    // 注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    pickApple: () => (dispatch, getState) => {

        // 如果正在摘苹果，则结束这个thunk, 不执行摘苹果
        if(getState().isPicking)
            return;

        // 通知开始摘苹果
        dispatch(appleActions.beginPickApple());

        // 发送摘苹果请求
        // $.ajax({
        //     type: 'get',
        //     url : '/appleBasket/pickApple',
        //     success: function(data) {
        //         dispatch(appleActions.donePickApple(data.weight))
        //     },
        //     error: function(error) {
        //         dispatch(appleActions.failPickApple(error));
        //     }
        // });

        appleActions.weight = appleActions.weight + 50;
        if (appleActions.weight > 500) {
            dispatch(appleActions.failPickApple(appleActions.weight + " is too weight"));
        } else {
            dispatch(appleActions.donePickApple(appleActions.weight));
        }
    },


    beginPickApple: () => ({
        type: apple_prefix + 'BEGIN_PICK_APPLE'
    }),

    donePickApple: appleWeight => ({
        type: apple_prefix + 'DONE_PICK_APPLE',
        payload: appleWeight
    }),

    failPickApple: errMsg => ({
        type: apple_prefix + 'FAIL_PICK_APPLE',
        payload: new Error(errMsg),
        error: true
    }),


    eatApple: appleId => ({
        type: apple_prefix + 'EAT_APPLE',
        payload: appleId
    })

};

export default appleActions;