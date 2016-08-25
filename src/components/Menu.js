/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import MenuLink from './MenuLink'

export default class Menu extends React.Component {
    render() {
        let {state, menu_now_id} = this.props;
        var menus = state.map(function (res, index) {
            return (
                <li className="menu-item" key={index}><p className={(menu_now_id === res.id)? "menu-item-p-now" : "menu-item-p"} onClick={this.props.menuClick.bind(this, res.id)}>
                    <MenuLink to={res.url} title={res.title}>{res.title}</MenuLink></p></li>
            );
        }.bind(this));
        return (
            <ul>
                {menus}
            </ul>
        );
    }
}