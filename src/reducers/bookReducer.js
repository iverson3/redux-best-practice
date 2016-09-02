/**
 * Created by iFan on 16/8/25.
 */

const bookInitState = {
    bookList: [],
    bookType: '',
    maxId: 1,
    currBook: {}
};
function bookReducer(state = bookInitState, action) {
    switch (action.type) {
        case 'ADD_BOOK':
            return Object.assign({}, state, {bookList: [...state.bookList, action.book], maxId: state.maxId + 1});
        case 'DELETE_BOOK':
            let books = [];
            state.bookList.map(function (res, index) {
                if (res.id !== action.bookid) {
                    books.push(res);
                }
            });
            return Object.assign({}, state, {bookList: books});
        case 'FETCH_BOOK':
            let currBook = {};
            for (let i = 0; i < state.bookList.length; i++) {
                if (state.bookList[i].id === action.bookid) {
                    currBook = state.bookList[i];
                    break;
                }
            }
            return Object.assign({}, state, {currBook: currBook});
        default:
            return state;
    }
}

export default bookReducer;