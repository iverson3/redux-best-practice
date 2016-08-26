/**
 * Created by stefan.wang on 8/12/2016.
 */
import React from 'react';

/**
 * default color
 */
var style = {
    color: 'red'
};


export default class FormField extends React.Component {
    render() {
        var error = this.props.error;
        var label = this.props.label;
        var required = this.props.required;

        return (
            <tr>
                <td>
                    <label>{required ? <span style={style}>*</span> : null}{this.props.label}</label>
                </td>
                <td>
                    {this.props.children}
                    {error ? <span style={style}>{error}</span> : null}
                </td>
            </tr>
        );
    }
}