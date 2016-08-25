/**
 * Created by stefan.wang on 8/25/2016.
 */
import React from 'react'

export default class Book extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    render() {
        let {state} = this.props;
        return (
            <p>
                <span>{state.name}</span> <span onClick={this.props.onDeleteBook.bind(this, state.id)}>[<a
                href="javascript:;">delete</a>]</span>
            </p>
        );
    }
}