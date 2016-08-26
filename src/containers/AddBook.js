/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import bookActions from '../actions/bookAction'

class AddBook extends React.Component {

    AddBookHandle() {
        const { state, dispatch } = this.props;
        let book = {id: state.maxid, name: this.refs.name.value, author: this.refs.author.value};
        dispatch(bookActions.addBook(book));
    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text" ref="name" />
                    <input type="text" ref="author" />

                    <Link onClick={this.AddBookHandle.bind(this)} to="/blog">Submit</Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: {maxid: state.book.maxId}
    };
};

export default connect(mapStateToProps)(AddBook);