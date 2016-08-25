/**
 * Created by stefan.wang on 8/22/2016.
 */
import React from 'react'
import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'

function userReducer(state = {}, action) {
    console.log('userReducer is called');
    switch (action.type) {
        case "SET_NAME":
            // 方案二
            // let obj = {
            //     name: action.name
            // };
            // Object.assign(obj, state);
            // return obj;

            // 方案一
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
}

function itemsReducer(state = [], action) {
    console.log('itemsReducer is called');
    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...state,
                action.item
            ];
        default:
            return state;
    }
}

function asyncReducer(state = {}, action) {
    console.log('asyncReducer is called');
    switch (action.type) {
        case 'ASYNC_ACTION':
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    }
}


// 模拟数据
let json = "[{'id': 1, 'title': 'Index', 'url': '/'}, {'id': 2, 'title': 'Blog', 'url': '/blog'}, {'id': 3, 'title': 'Login', 'url': '/login/isLogin/1'}, {'id': 4, 'title': 'Apple', 'url': '/apple'}]";
const menuList = eval("(" + json + ")");

function menuReducer(state = {menuList: menuList, now: 1}, action) {
    switch (action.type) {
        case 'MENU_CUT':
            return Object.assign({}, state, {now: action.now});
        default:
            return state;
    }
}

const bookInitState = {bookList: [{id: 1, name: 'big bom', author: 'stefan'}], bookType: '', maxId: 1};
function bookReducer(state = bookInitState, action) {
    switch (action.type) {
        case 'ADD_BOOK':
            return Object.assign({}, state, {bookList: [...state.bookList, action.book]});
        case 'DELETE_BOOK':
            let books = [];
            state.bookList.map(function (res, index) {
                if (res.id !== action.bookid) {
                    books.push(res);
                }
            });
            return Object.assign({}, state, {bookList: books});
        default:
            return state;
    }
}


const reducers = combineReducers({
    routing: routerReducer,
    user: userReducer,
    items: itemsReducer,
    async: asyncReducer,
    menu: menuReducer,
    book: bookReducer
});

export default reducers;