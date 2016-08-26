/**
 * Created by stefan.wang on 8/25/2016.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppleItem from '../components/AppleItem'
import appleActions from '../actions/appleAction'


class AppleBusket extends React.Component {

    render() {
        // 这里不再取dispatch 而是 actions
        let { state, actions } = this.props;

        let stats = {
            appleNow: {
                quantity: 0,
                weight: 0
            },
            appleEaten: {
                quantity: 0,
                weight: 0
            }
        };
        // 遍历并统计数据
        state.apples.map(apple => {
            let selector = apple.isEaten ? 'appleEaten':'appleNow';
            stats[selector].quantity ++;
            stats[selector].weight += apple.weight;
        });

        return (
            <div className="appleBusket">
                <div className="title">苹果篮子</div>
                <div className="stats">
                    <div className="section">
                        <div className="head">当前</div>
                        <div className="content">
                            {stats.appleNow.quantity}个苹果，
                            {stats.appleNow.weight}克
                        </div>
                    </div>
                    <div className="section">
                        <div className="head">已吃掉</div>
                        <div className="content">
                            {stats.appleEaten.quantity}个苹果，
                            {stats.appleEaten.weight}克
                        </div>
                    </div>
                </div>

                <div className="appleList">
                    { state.apples.map((apple, key) => <AppleItem key={apple.id} state={apple} actions={{eatApple: actions.eatApple}} />) }
                </div>

                <div className="btn-div">
                    <button onClick={actions.pickApple}>摘苹果</button>
                </div>

            </div>
        );
    }
}

// 对actionCreator做dispatch级别的封装，这个过程我们可以使用 redux 提供的 bindActionCreators 函数自动完成。
// 然后就可以直接调用action，而不需要使用dispatch方法去调用actionCreator
function buildActionDispatcher(dispatch) {
    return {
        actions: bindActionCreators(appleActions, dispatch)
    }
}

const select = (state) => {
    return {
        state: state.appleBusket
    }
};

export default connect(select, buildActionDispatcher)(AppleBusket);