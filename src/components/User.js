/**
 * Created by stefan.wang on 9/26/2016.
 */
import React from 'react'

export default class User extends React.Component {
    render() {
        let {state} = this.props;
        return (
            <div>
                <p>{state.id} {state.name} <img className="user-img" src={state.img} alt=""/></p>
            </div>
        );
    }
}