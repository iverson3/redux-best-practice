/**
 * Created by stefan.wang on 8/8/2016.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './containers/App'
import Index from './containers/Index'
import Login from './components/Login'
import Blog from './containers/Blog'
import AddBook from './containers/AddBook'
import AppleBusket from './containers/AppleBusket'
import BookDetail from './components/BookDetail'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import NotFoundView from './components/public/NotFoundView'
import UploadList from './containers/UploadList'
import UploadForm from './containers/UploadForm'
import reducers from './reducers/reducers'
import callTraceMiddleware from './middlewares/callTraceMiddleware'
import asyncHandleMiddleware from './middlewares/asyncHandleMiddleware'
import isLogin from './common/common'


// 使用中间件
let middleWares = [thunkMiddleware, createLogger(), callTraceMiddleware, asyncHandleMiddleware];
const finalCreateStore = applyMiddleware(...middleWares)(createStore);
let store = finalCreateStore(reducers);


// 路由的钩子函数：用来做一些前置处理和后置处理
function errorEnter() {
    console.log('errorEnter')
}

function errorLeave() {
    console.log('errorLeave')
}

// 权限检查
function checkAuth(nextState, replace) {
    if (isLogin() === 'true') {
        return true;
    } else {
        // 第一个参数： 登录成功之后需要继续访问的页面
        replace({ nextPathname: nextState.location.pathname }, '/signin');
        return false;
    }
}

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={SignIn} onEnter={errorEnter} onLeave={errorLeave} />
                <Route path="index" component={Index} />
                <Route path="signin" component={SignIn} />
                <Route path="signout" component={SignOut} />
                <Route path="login/isLogin/:isLogin" component={Login} onEnter={checkAuth} />
                <Route path="blog" component={Blog} onEnter={checkAuth} />
                <Route path="apple" component={AppleBusket} onEnter={checkAuth} />
                <Route path="add-book" component={AddBook} onEnter={checkAuth} />
                <Route path="book/:bookid" component={BookDetail} onEnter={checkAuth} />
                <Route path="uploadlist" component={UploadList} />
                <Route path="uploadform" component={UploadForm} />
            </Route>
            <Route path='*' component={NotFoundView} />
        </Router>
    </Provider>),
    document.getElementById('App')
);