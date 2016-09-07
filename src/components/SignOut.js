/**
 * Created by stefan.wang on 9/6/2016.
 */
import React from 'react'
import { Link } from 'react-router'

export default class SignOut extends React.Component {
    componentDidMount() {
        localStorage.setItem('login', false);
    }

    render() {
        return (
            <div>
                <p>已经成功退出登录！  <Link to="/signin">登录</Link> </p>
            </div>
        );
    }
}