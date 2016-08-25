/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import {menuCut} from '../actions'
import Menu from './Menu'


class Header extends React.Component {
    constructor(props) {
        super(props);
        // 模拟数据
        let json = "[{'id': 1, 'title': 'Index', 'url': '/'}, {'id': 2, 'title': 'Blog', 'url': '/blog'}, {'id': 3, 'title': 'Login', 'url': '/login'}]";
        this.menuData = eval("(" + json + ")");
    }
    render() {
        const { dispatch, now } = this.props;
        return (
            <div id="header">
                <Menu menuData={this.menuData} menuClick={(menuid) => dispatch(menuCut(menuid))} menu_now_id={now.now}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        now: state.menu
    }
};

export default connect(mapStateToProps)(Header);