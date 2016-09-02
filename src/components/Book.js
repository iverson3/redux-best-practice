/**
 * Created by stefan.wang on 8/25/2016.
 */
import React from 'react'

export default class Book extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    onClick() {
        let {state} = this.props;
        this.props.onFetchBook(state.id);
        window.location.hash = '/book/' + state.id;
    }

    render() {
        let {state} = this.props;
        return (
            <p>
                <span onClick={this.onClick.bind(this)}>{state.name}</span> <span onClick={this.props.onDeleteBook.bind(this, state.id)}>[<a
                href="javascript:;">delete</a>]</span>
            </p>
        );
    }
}