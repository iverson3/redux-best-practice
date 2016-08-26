/**
 * Created by iFan on 16/8/25.
 */
import { fromJS } from 'immutable'
import {apple_prefix} from '../../config'

const defaultState = {
    isPicking: false,
    newAppleId: 0,
    apples: []
};

function appleReducer(state = defaultState, action) {
    switch (action.type) {
        case apple_prefix + 'BEGIN_PICK_APPLE':
            return Object.assign({}, state, {
                isPicking: true
            });
        case apple_prefix + 'DONE_PICK_APPLE':
            return Object.assign({}, state, {
                apples: [
                    ...state.apples,
                    {
                        id: state.newAppleId,
                        weight: action.payload,
                        isEaten: false
                    }
                ],
                newAppleId: state.newAppleId + 1,
                isPicking: false
            });
        case apple_prefix + 'FAIL_PICK_APPLE':
            return Object.assign({}, state, {
                isPicking: false
            });
        case apple_prefix + 'EAT_APPLE':
            // return Object.assign({}, state, {
            //     apples: [
            //         ...state.apples.slice(0, action.payload),
            //         Object.assign({}, state.apples[action.payload], { isEaten: true }),
            //         ...state.apples.slice(action.payload + 1)
            //     ]
            // });

            // 借助immutable的简化写法
            return fromJS(state).setIn(['apples',action.payload,'isEaten'], true).toJS();
        default:
            return state;
    }
}

export default appleReducer;