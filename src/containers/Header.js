/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import {menuCut} from '../actions/actions'
import Menu from '../components/Menu'


class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const { dispatch, state } = this.props;
        return (
            <div id="header">
                <Menu state={state} menuClick={(menuid) => dispatch(menuCut(menuid))}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: {menuList: state.menu.menuList, now: state.menu.now}
    }
};

export default connect(mapStateToProps)(Header);