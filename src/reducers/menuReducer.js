/**
 * Created by iFan on 16/8/25.
 */
import {validate, validateType} from '../common/validate'

// 模拟数据
let json = "[{'id': 1, 'title': 'Index', 'url': '/'}, {'id': 2, 'title': 'Blog', 'url': '/blog'}, {'id': 3, 'title': 'Login', 'url': '/login/isLogin/1'}, {'id': 4, 'title': 'Apple', 'url': '/apple'}]";
const menuList = eval("(" + json + ")");

function menuReducer(state = {menuList: menuList, now: 1}, action) {
    switch (action.type) {
        case 'MENU_CUT':
            let isValidate = validate(validateType.password, 'pass111', 'pass111');
            console.log("isValidate: ", isValidate);

            return Object.assign({}, state, {now: action.now});
        default:
            return state;
    }
}

export default menuReducer;