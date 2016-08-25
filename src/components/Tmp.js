/**
 * Created by stefan.wang on 8/22/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import {setName, asyncAction_1} from '../actions'


class App extends React.Component {
    clickHandle() {
        // 分发同步的action
        this.props.dispatch(setName(this.props.user.name + this.refs.word.value));
    }

    clickHandle2() {
        // 分发异步的action
        this.props.dispatch(asyncAction_1(this.refs.word.value));
    }

    render() {
        let user = this.props.user;
        return (
            <div>
                <h1>{this.props.author}</h1>
                <h3>name: {user.name}</h3>
                <input type="text" ref="word"/>
                <input type="button" onClick={this.clickHandle.bind(this)} value="Change Name"/>

                <hr/>
                <input type="button" onClick={this.clickHandle2.bind(this)} value="async change"/>
                <h4>{this.props.async.message}</h4>
            </div>
        );
    }
}

// select 函数, 它会把我们需要在属性 (props) 中对我们的组件暴露的数据从 state 中抽离出来
const mapStateToProps = (state, props) => {
    // 返回数据之前可进行一定的处理
    return {
        user: state.user,
        items: state.items,
        async: state.async,
        author: props.author
    }
};

// Connect 可以实现一个组件和 Redux store 的绑定,通过这种绑定可以让store通过组件的属性 (prop) 分发函数,
// 也可以根据我们自己的需要增加任何需要暴露的属性作为store里面state的一部分
// Connect 将一个选择你想要将哪一些 state 暴露给组件的函数作为第一个参数。
export default connect(mapStateToProps)(App)