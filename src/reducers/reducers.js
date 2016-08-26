/**
 * Created by stefan.wang on 8/22/2016.
 */
import { combineReducers } from 'redux'

import appleReducer from './appleReducer'
import bookReducer from './bookReducer'
import menuReducer from './menuReducer'
import userReducer from './userReducer'
import itemsReducer from './itemsReducer'
import asyncReducer from './asyncReducer'

const reducers = combineReducers({
    user: userReducer,
    items: itemsReducer,
    async: asyncReducer,
    menu: menuReducer,
    book: bookReducer,
    appleBusket: appleReducer
});

export default reducers;