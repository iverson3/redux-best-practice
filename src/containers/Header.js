/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import menuActions from '../actions/menuAction'
import Menu from '../components/Menu'
import isLogin from '../common/common'

class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const { dispatch, state } = this.props;
        return (
            <div id="header">
                <p>{isLogin()}</p>
                <Menu state={state} menuClick={(menuid) => dispatch(menuActions.menuCut(menuid))}/>
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