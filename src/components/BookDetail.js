/**
 * Created by stefan.wang on 8/26/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

class BookDetail extends React.Component {
    render() {
        let { state } = this.props;
        // let bookid = this.props.params.bookid;
        return (
            <div>
                <p>book id: {state.book.id}</p>
                <p>book name: {state.book.name}</p>
                <p>book author: {state.book.author}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: {book: state.book.currBook}
    };
};

export default connect(mapStateToProps)(BookDetail);