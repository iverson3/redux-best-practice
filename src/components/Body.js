/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'

export default class Body extends React.Component {
    render() {
        return (
            <div id="body">
                <div id="body-banner">
                    <img src={require('../../public/images/code.png')} alt=""/>
                </div>
                <div id="body-main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}