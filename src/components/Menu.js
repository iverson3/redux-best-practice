/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import MenuLink from './MenuLink'

export default class Menu extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    render() {
        let {state} = this.props;
        var menus = state.menuList.map(function (res, index) {
            return (
                <li className="menu-item" key={index}><p className={(state.now === res.id)? "menu-item-p-now" : "menu-item-p"} onClick={this.props.menuClick.bind(this, res.id)}>
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