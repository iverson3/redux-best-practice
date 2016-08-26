/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import App from './App'
import BookList from '../components/BookList'
import bookActions from '../actions/bookAction'

class Blog extends React.Component {
    render() {
        const {state, dispatch} = this.props;
        return (
            <div id="blog">
                <div>
                    <BookList state={state.bookList} onDeleteBook={(bookid) => dispatch(bookActions.deleteBook(bookid))} />
                </div>
                <div>
                    <Link to="/add-book">Add Book</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: {bookList: state.book.bookList}
    }
};

export default connect(mapStateToProps)(Blog);