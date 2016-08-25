/**
 * Created by stefan.wang on 8/8/2016.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import Index from './components/Index'
import Login from './components/Login'
import Blog from './components/Blog'
import AddBook from './components/AddBook'
import NotFoundView from './components/public/NotFoundView'
import reducers from './reducers'
import callTraceMiddleware from './middlewares/callTraceMiddleware'


// 使用中间件
let middleWares = [thunkMiddleware, callTraceMiddleware];
const finalCreateStore = applyMiddleware(...middleWares)(createStore);
let store = finalCreateStore(reducers);

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <Route path="/" component={Index} />
                <Route path="/login" component={Login} />
                <Route path="/blog" component={Blog} />
                <Route path="/add-book" component={AddBook} />
            </Route>
            <Route path='*' component={NotFoundView}/>
        </Router>
    </Provider>),
    document.getElementById('App')
);