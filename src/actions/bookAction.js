/**
 * Created by iFan on 16/8/25.
 */

let bookActions = {
    addBook: (book) => ({
        type: "ADD_BOOK",
        book: book
    }),

    deleteBook: (id) => ({
        type: "DELETE_BOOK",
        bookid: id
    }),

    fetchBook: (id) => ({
        type: "FETCH_BOOK",
        bookid: id
    }),

    pageChange: (pageInfo = {currPage: 1}) => ({
        type: "PAGE_CHANGE",
        pageInfo: pageInfo
    })
};

export default bookActions;