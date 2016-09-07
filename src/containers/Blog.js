/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import BookList from '../components/BookList'
import bookActions from '../actions/bookAction'
import PagingBarExample from '../components/PagingBarExample'

class Blog extends React.Component {
    render() {
        const {state, dispatch} = this.props;
        let items = {
            get() {
                return {
                    get(name) {
                        let items = {};
                        items['PagingIndex'] = state.currPage;
                        items['PagingCount'] = (state.bookList.length === 0) ? 1 : Math.ceil(state.bookList.length / state.pageSize);
                        items['TotalRecord'] = state.bookList.length;
                        return items[name];
                    }
                };
            }
        };
        let actions = {
            pagingAction(pagingIndex) {
                let pageInfo = {
                    currPage: pagingIndex
                };
                dispatch(bookActions.pageChange(pageInfo));
            }
        };

        return (
            <div id="blog">
                <div>
                    <BookList
                        state={state.pageBooks}
                        onDeleteBook={(bookid) => dispatch(bookActions.deleteBook(bookid))}
                        onFetchBook={(bookid) => dispatch(bookActions.fetchBook(bookid))}
                    />
                </div>
                <div><PagingBarExample items={items} actions={actions} /></div>
                <div>
                    <Link to="/add-book">Add Book</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: {bookList: state.book.bookList, pageBooks: state.book.pageBooks, currPage: state.book.currPage, pageSize: state.book.pageSize}
    }
};

export default connect(mapStateToProps)(Blog);