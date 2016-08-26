/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import Book from './Book'


export default class BookList extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    render() {
        let {state} = this.props;
        let books = state.map(function (book, index) {
            return (
                <li key={index}><Book state={book} onDeleteBook={(bookid) => {this.props.onDeleteBook(bookid)}} /></li>
            );
        }.bind(this));
        return (
            <div>
                <h3>Book List</h3>
                <hr/>
                <div>
                    <ul>
                        {books}
                    </ul>
                </div>
            </div>
        );
    }
}