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
import NotFoundView from './components/public/NotFoundView'
import reducers from './reducers/reducers'
import callTraceMiddleware from './middlewares/callTraceMiddleware'
import asyncHandleMiddleware from './middlewares/asyncHandleMiddleware'


// 使用中间件
let middleWares = [thunkMiddleware, createLogger(), callTraceMiddleware, asyncHandleMiddleware];
const finalCreateStore = applyMiddleware(...middleWares)(createStore);
let store = finalCreateStore(reducers);

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Index} />
                <Route path="login/isLogin/:isLogin" component={Login} />
                <Route path="blog" component={Blog} />
                <Route path="apple" component={AppleBusket} />
                <Route path="add-book" component={AddBook} />
            </Route>
            <Route path='*' component={NotFoundView}/>
        </Router>
    </Provider>),
    document.getElementById('App')
);