/**
 * Created by stefan.wang on 9/26/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import userActions from '../actions/userAction'
import User from '../components/User'

class UploadList extends React.Component {
    render() {
        const {state, dispatch} = this.props;
        let userList = state.userList.map(function (user, index) {
            return (
                <User
                    key={index}
                    state={user}
                    onDeleteUser={(userid) => dispatch(userActions.deleteUser(userid))}/>
            );
        });

        return (
            <div>
                <h2>User List</h2>
                {userList}
                <div><Link to="/uploadform">Add User</Link></div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        state: {userList: state.user.userList}
    }
};

export default connect(mapStateToProps)(UploadList);