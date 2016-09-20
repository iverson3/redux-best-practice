/**
 * Created by stefan.wang on 9/18/2016.
 */
import React from 'react'
import Message from 'uxcore-message'
import Dialog from 'uxcore-dialog'
import Button from 'uxcore-button'
import Form from 'uxcore-form'


let {
    FormRow: Row,
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    ButtonGroupFormField,
    Validators
} = Form;



export default class FormDemo extends React.Component {

    handleSubmit() {
        let data = this.refs.form.getValues();
        console.log(data);
        if (data.pass === true) {
            console.log(data.values.location);
            Message.success("通过表单验证", 1);
            // Dialog.success({
            //     title: '成功',
            //     content: '通过表单验证'
            // });
        } else {
            Message.error("表单验证未通过", 2);
            // Dialog.error({
            //     title: '错误',
            //     content: '表单验证未通过'
            // });
        }
    }

    render() {
        let me = this;
        return (
            <div className="demo-basic">
                <style>
                    {".required {font-family:Simsun} .demo-basic-form {width: 532px} .form-select {background: #ccc; border-radius: 5px; padding-top: 15px; width: 530px; margin-bottom: 40px;}"}
                </style>
                <Form ref="form" className="demo-basic-form" instantValidate={true}>
                    <Input jsxname="theme" jsxlabel="主题" required={true} jsxplaceholder="请输入主题" jsxrules={[
                        {validator: Validators.isNotEmpty, errMsg: "不能为空"},
                        {validator: function(value) {return value.length <= 3}, errMsg: "不能超过3个字"}
                    ]}/>
                    <Input jsxname="location" jsxlabel="地点" required={true} jsxplaceholder="请输入地点" jsxrules={[
                        {validator: Validators.isNotEmpty, errMsg: "不能为空"}
                    ]}/>
                    <Date jsxname="date" jsxlabel="时间" jsxtype="cascade"/>
                    <TextArea jsxname="content" jsxlabel="内容" required={true} jsxrules={[
                        {validator: Validators.isNotEmpty, errMsg: "不能为空"}
                    ]}/>
                    <ButtonGroupFormField>
                        <Button size="large" onClick={me.handleSubmit.bind(me)}>确定</Button>
                    </ButtonGroupFormField>
                </Form>
            </div>
        )
    }
};