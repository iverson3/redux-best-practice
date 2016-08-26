/**
 * Created by stefan.wang on 8/12/2016.
 */
import React from 'react';


export default class ButtonField extends React.Component {
    render() {
        return (
            <tr>
                <td colSpan="2">
                    {this.props.children}
                </td>
            </tr>
        );
    }
}