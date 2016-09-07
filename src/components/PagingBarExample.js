/**
 * Created by stefan.wang on 9/6/2016.
 */
import React, { Component } from 'react'
import PagingBar from './public/GrxPagingBar'

/* ================================================================================
 * React PagingBar使用范例组件
 * ================================================================================ */
export default class PagingBarExample extends Component {
    render() {
        let pagingOptions = {
            showNumber: 5
        };

        return (
            <table className="table table-condensed">
                <tbody>
                <tr>
                    <td>
                        <PagingBar pagingOptions={pagingOptions} {...this.props} />
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}