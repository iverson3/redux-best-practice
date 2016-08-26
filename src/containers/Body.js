/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import Banner from '../components/Banner'

export default class Body extends React.Component {
    render() {
        return (
            <div id="body">
                {/*<Banner />*/}
                <div id="body-main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}