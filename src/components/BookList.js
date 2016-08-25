/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'


export default class BookList extends React.Component {
    render() {
        let books = this.props.bookList.map(function (res, index) {
            return (
                <li key={index} no={res.id}><span>{res.name}</span> <span onClick={this.props.onDeleteBook.bind(this, res.id)}>[<a
                    href="javascript:;">delete</a>]</span></li>
            );
        }.bind(this));
        return (
            <div>
                <ul>
                    {books}
                </ul>
            </div>
        );
    }
}