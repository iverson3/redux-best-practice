/**
 * Created by iFan on 16/8/25.
 */

const bookInitState = {
    bookList: [],
    bookType: '',
    maxId: 1,
    currBook: {},
    pageBooks: [],
    currPage: 1,
    pageSize: 2
};

function bookReducer(state = bookInitState, action) {
    switch (action.type) {
        case 'ADD_BOOK':{
            let bookList = [...state.bookList, action.book];
            let pageBooks = [];
            for (let i = 0; i < state.pageSize; i++) {
                if (typeof bookList[i] !== 'undefined') {
                    pageBooks.push(bookList[i]);
                }
            }
            return Object.assign({}, state, {bookList: [...state.bookList, action.book], maxId: state.maxId + 1, pageBooks: pageBooks});
        }

        case 'DELETE_BOOK':{
            let books = [];
            state.bookList.map(function (res, index) {
                if (res.id !== action.bookid) {
                    books.push(res);
                }
            });
            return Object.assign({}, state, {bookList: books});
        }

        case 'FETCH_BOOK':{
            let currBook = {};
            for (let i = 0; i < state.bookList.length; i++) {
                if (state.bookList[i].id === action.bookid) {
                    currBook = state.bookList[i];
                    break;
                }
            }
            return Object.assign({}, state, {currBook: currBook});
        }

        case 'PAGE_CHANGE':{
            let pageBooks = [];
            for (let i = (state.pageSize * (action.pageInfo.currPage - 1)); i < (state.pageSize * action.pageInfo.currPage); i++) {
                if (typeof state.bookList[i] !== 'undefined') {
                    pageBooks.push(state.bookList[i]);
                }
            }
            return Object.assign({}, state, {pageBooks: pageBooks, currPage: action.pageInfo.currPage});
        }

        default:
            return state;
    }
}

export default bookReducer;