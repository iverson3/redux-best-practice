/**
 * Created by stefan.wang on 8/26/2016.
 */
import React from 'react'

export default class BookDetail extends React.Component {
    render() {
        let bookid = this.props.params.bookid;
        return (
            <div>
                <p>book id</p>
                <p>book name</p>
                <p>book author</p>
                <div>{bookid}</div>
            </div>
        );
    }
}