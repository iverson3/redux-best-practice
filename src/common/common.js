/**
 * Created by stefan.wang on 8/26/2016.
 */

// 公共函数


// 判断用户是否登录
function isLogin() {
    let hasLogin = localStorage.getItem('login');
    return hasLogin;
}
export default isLogin;