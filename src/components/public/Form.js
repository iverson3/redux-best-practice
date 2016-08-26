/**
 * Created by stefan.wang on 8/12/2016.
 */
import React from 'react';

export default class Form extends React.Component {
    render() {
        var title = this.props.title;

        return (
            <fieldset>
                <legend>{title}</legend>
                <form>
                    <table>
                        <tbody>
                        {this.props.children}
                        </tbody>
                    </table>
                </form>
            </fieldset>
        );
    }
}