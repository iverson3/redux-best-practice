/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import MenuLink from './MenuLink'

export default class Menu extends React.Component {
    render() {
        var menus = this.props.menuData.map(function (res, index) {
            return (
                <li className="menu-item" key={index} no={res.id}><p className={(this.props.menu_now_id === res.id)? "menu-item-p-now" : "menu-item-p"} onClick={this.props.menuClick.bind(this, res.id)}>
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