/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import Button from 'uxcore-button'
import Uploader from 'uxcore-uploader'
import 'uxcore/assets/iconfont.css'
import 'uxcore/assets/orange.css'
import asyncActions from '../actions/asyncAction'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fileList: []};
    }
    handleChange(fileList) {
        console.log(fileList)
        this.setState({
            fileList: fileList
        });
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    onClickHandle() {
        let {dispatch} = this.props;
        dispatch(asyncActions.asyncAction_1(this.refs.message.value));
    }

    click2() {
        console.log('click2')
    }

    render() {
        let {state} = this.props;
        const tips = <span className="tips">限制0.5M以内<em>（支持格式：.png; .jpg; .gif; .jpng）</em></span>;

        return (
            <div>
                <p>{state.isLogin}</p>

                <input type="text" ref="message"/>
                <input type="button" value="press" onClick={this.onClickHandle.bind(this)} />

                <h2>{state.message}</h2>


                <div id="fileupload">
                    <Button type="primary" size="small">default primary</Button>
                    <Button type="secondary" size="medium">secondary</Button>
                    <Button type="outline" size="large" onClick={this.click2}>outline</Button>
                </div>

                <div>
                    <Uploader autoPending={false}
                              ref="uploader"
                              multiple={false}
                              isOnlyImg={true}
                              tips={tips}
                              fileList={this.state.fileList}
                              onChange={this.handleChange.bind(this)}
                              name='file'
                              url='http://localhost/stefan/test/server-for-redux'
                              locale="en" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        state: {isLogin: ownProps.params.isLogin, message: state.async.message}
    };
};

export default connect(mapStateToProps)(Login);