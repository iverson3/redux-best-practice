/**
 * Created by stefan.wang on 9/26/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import Upload from '../components/Upload'
import userActions from '../actions/userAction'

class UploadForm extends React.Component {
    render() {
        const {state, dispatch} = this.props;
        return (
            <div>
                <h2>添加用户</h2>
                <Upload
                    maxid={state.maxid}
                    onAddUser={(user) => dispatch(userActions.addUser(user))} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state: {maxid: state.user.count}
    }
};

export default connect(mapStateToProps)(UploadForm);