/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Body>
                {this.props.children}
                </Body>
                <Footer />
            </div>
        );
    }
}