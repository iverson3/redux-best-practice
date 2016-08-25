/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component {
    render() {
        let {state} = this.props;
        return (
            <div>
                <h2>这是Login页面的main部分</h2>
                <p>{state.isLogin}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state: {isLogin: ownProps.params.isLogin}
    };
};

export default connect(mapStateToProps)(Login);