/**
 * Created by stefan.wang on 9/6/2016.
 */
import React from 'react'
import { Link } from 'react-router'
import isLogin from '../common/common'


export default class SignIn extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        let name = this.refs.name.value;
        let pass = this.refs.pass.value;
        if (name !== 'stefan' || pass !== '333') {
            alert('账号或密码不正确');
            return;
        }
        localStorage.setItem('login', true);

        const location = this.props.location;
        if (location.state && location.state.nextPathname) {
            this.props.history.replace(location.state.nextPathname);
        } else {
            this.props.history.replace('/index');
        }
    }

    render() {
        if (isLogin() === 'true') {

            return (
                <div>
                    <p>你已经登录系统！ <Link to="/signout">点击退出登录</Link></p>
                </div>
            );
        } else {
            return (
                <div>
                    <h3>登录系统</h3>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label><input type="text" ref="name"/></label><br/>
                        <label><input type="password" ref="pass"/></label> (password)<br/>
                        <button type="submit">登录</button>
                    </form>
                </div>
            );
        }
    }
}