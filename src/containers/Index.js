/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import asyncActions from '../actions/asyncAction'


class Index extends React.Component {
    render() {
        let errorTip = "";
        let {state, dispatch} = this.props;
        if (state.error.isError) {
            errorTip = "Error Tip: " + state.error.message;
        }
        let users = state.userList.map(function (res, index) {
            return<li key={index}>{res.id} {res.name}  <span>{res.age}</span></li>;
        });
        return (
            <div>
                <h2>这是首页的main部分</h2>

                <input type="button" value="获取一个用户" onClick={() => dispatch(asyncActions.asyncFetchUser({count: 1}))}/>
                <span> {errorTip}</span>
                <div>
                    <hr/>
                    <p>用户列表：</p>
                    <ul>
                        {users}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: {userList: state.user.userList, error: state.user.error}
    }
};

export default connect(mapStateToProps)(Index);