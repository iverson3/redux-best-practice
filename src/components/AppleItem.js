/**
 * Created by stefan.wang on 8/25/2016.
 */
import React from 'react'

export default class AppleItem extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    render() {
        let { state, actions } = this.props;

        return (
            <div className="appleItem">
                <div className="apple"><img src={require('../../public/images/apple.jpg')} alt=""/></div>
                <div className="info">
                    <div className="name">红苹果 - {state.id + 1}号</div>
                    <div className="weight">{state.weight}克</div>
                </div>
                <div className="btn-div">
                    {!state.isEaten? <button onClick={() => actions.eatApple(state.id) }>吃掉</button> : <span>已吃掉</span>}
                </div>
            </div>
        );
    }
}