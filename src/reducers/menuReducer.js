/**
 * Created by iFan on 16/8/25.
 */

// 模拟数据
let json = "[{'id': 1, 'title': 'Index', 'url': '/index'}, {'id': 2, 'title': 'Blog', 'url': '/blog'}, {'id': 3, 'title': 'Login', 'url': '/login/isLogin/1'}, {'id': 4, 'title': 'Apple', 'url': '/apple'}, {'id': 5, 'title': 'signIn', 'url': '/signin'}, {'id': 6, 'title': 'signOut', 'url': '/signout'}, {'id': 7, 'title': 'uploadList', 'url': '/uploadlist'}]";
const menuList = eval("(" + json + ")");

function menuReducer(state = {menuList: menuList, now: 1}, action) {
    switch (action.type) {
        case 'MENU_CUT':
            return Object.assign({}, state, {now: action.now});
        default:
            return state;
    }
}

export default menuReducer;