/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import App from './App'
import BookList from './BookList'
import {deleteBook} from '../actions'

class Blog extends React.Component {
    render() {
        const {bookList, dispatch} = this.props;
        return (
            <App>
                <div>
                    <BookList bookList={bookList} onDeleteBook={(bookid) => dispatch(deleteBook(bookid))} />
                </div>
                <div>
                    <Link to="/add-book">Add Book</Link>
                </div>
            </App>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookList: state.book.bookList
    }
};

export default connect(mapStateToProps)(Blog);