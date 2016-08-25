/**
 * Created by stefan.wang on 8/25/2016.
 */
import React from 'react'

export default class Banner extends React.Component {
    render() {
        return (
            <div id="body-banner">
                <img src={require('../../public/images/banner.jpg')} alt=""/>
            </div>
        );
    }
}