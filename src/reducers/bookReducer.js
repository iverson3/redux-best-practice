/**
 * Created by iFan on 16/8/25.
 */
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

export default bookReducer;