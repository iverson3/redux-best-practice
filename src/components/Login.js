/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import asyncActions from '../actions/asyncAction'

class Login extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    onClickHandle() {
        let {dispatch} = this.props;
        dispatch(asyncActions.asyncAction_1(this.refs.message.value));
    }

    render() {
        let {state} = this.props;
        return (
            <div>
                <h2>这是Login页面的main部分</h2>
                <p>{state.isLogin}</p>

                <input type="text" ref="message"/>
                <input type="button" value="press" onClick={this.onClickHandle.bind(this)} />

                <h2>{state.message}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state: {isLogin: ownProps.params.isLogin, message: state.async.message}
    };
};

export default connect(mapStateToProps)(Login);