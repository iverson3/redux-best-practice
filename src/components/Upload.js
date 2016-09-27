/**
 * Created by stefan.wang on 7/22/2016.
 */
import React from "react";
import Button from 'uxcore-button'
import Form from 'uxcore-form'
import Uploader from 'uxcore-uploader'
import 'uxcore/assets/iconfont.css'
import 'uxcore/assets/orange.css'
import Message from 'uxcore-message'
import { Link } from 'react-router'


let {
    FormRow: Row,
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    OtherFormField,
    RadioGroupFormField,
    NumberInputFormField,
    ButtonGroupFormField,
    Validators
} = Form;

let RadioItem = RadioGroupFormField.Item;

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fileList: []};
    }
    handleChange(fileList) {
        this.setState({
            fileList: fileList
        });
    }
    handleCancel(file) {
        for (let i = 0; i < this.state.fileList.length; i++) {
            if (this.state.fileList[i].name === file.name) {
                this.state.fileList.splice(i, 1);  // 从start的位置开始向后删除delCount个元素
                break;
            }
        }
        this.setState({
            fileList: this.state.fileList
        });
    }

    handleSubmit() {
        let data = this.refs.form.getValues();
        if (data.pass !== true) {
            Message.error("表单验证未通过", 2);
            return;
        }
        if (this.state.fileList.length === 0) {
            Message.error("请先上传用户头像", 2);
            return;
        }
        // 表单提交时通过data.values获取表单数据
        console.log(data.values.location);
        // 表单提交时从this.state.fileList中获取上传文件信息
        console.log(this.state.fileList);

        let user = {
            id: this.props.maxid + 1,
            name: data.values.name,
            age: data.values.age,
            img: this.state.fileList[0]['response']['data']['url'],
            date: data.values.date,
            sex: data.values.sex
        };
        this.props.onAddUser(user);
        window.location.hash = "/uploadlist";
    }

    render() {
        let me = this;
        const tips = <span className="tips">限制0.5M以内<em>（支持格式：.png; .jpg; .gif; .jpng）</em></span>;

        return (
            <div>
                <div className="demo-basic">
                    <style>
                        {".required {font-family:Simsun} .demo-basic-form {width: 532px}"}
                    </style>
                    <Form ref="form" className="demo-basic-form" instantValidate={true}>
                        <Input jsxname="name" jsxlabel="姓名"  jsxplaceholder="请输入姓名" required={true} jsxrules={[
                        {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                        {validator: function(value) {return value.length <= 10; }, errMsg: "不能超过10个字符"},
                        {validator: Validators.isRegExp, errMsg: "不符合指定格式"}
                    ]}/>
                        <NumberInputFormField
                            jsxname="age"
                            jsxlabel="年龄"
                            jsxtype="money"
                            delimiter=","
                            fixedNum={4}
                            jsxplaceholder="输入数字"
                            jsxtips="年龄必须大于18小于100"
                            jsxrules={[
                            {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                            {validator: Validators.isInt, errMsg: "请输入数字"},
                            {validator: function(value) {return value.length < 3 && parseInt(value) >= 18 }, errMsg: "年龄必须大于18小于100"}
                         ]}/>
                        <OtherFormField>
                            <Uploader autoPending={false}
                                      multiple={false}
                                      isOnlyImg={true}
                                      tips={tips}
                                      fileList={me.state.fileList}
                                      queueCapacity={1}
                                      onChange={me.handleChange.bind(me)}
                                      onCancel={me.handleCancel.bind(me)}
                                      name='file'
                                      url='http://www.messefrankfurt-vsc-test.com/test-for-stefan/'
                                      locale="en" />
                        </OtherFormField>
                        <Date format="yyyy-MM-dd" jsxname="date" jsxlabel="生日" jsxfrom={"1949-10-01"} jsxto={"2016-9-25"} locale="zh-cn" />

                        <RadioGroupFormField jsxname="sex" jsxlabel="性别" jsxflex={1} required={true} jsxrules={[
                        {validator: Validators.isNotEmpty, errMsg: "不能为空"}
                    ]}>
                            <RadioItem value="1" text="男"/>
                            <RadioItem value="2" text="女"/>
                        </RadioGroupFormField>

                        <ButtonGroupFormField>
                            <Button size="large" onClick={me.handleSubmit.bind(me)}>Submit</Button>
                        </ButtonGroupFormField>
                    </Form>

                    <div><Link to="/uploadlist">User List</Link></div>
                </div>
            </div>
        );
    }
}