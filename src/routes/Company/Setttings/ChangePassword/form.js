
import React, { useState, useEffect } from 'react';
import { ProductCategoryLookUp } from 'api/Shared/Master/ProductCategoryController';
import {
    Form,
    Input,
    Cascader,
     Select,
    Button,
    Card,
    // Upload
} from 'antd';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};


const ChangePasswordForm = ({ editableDataToForm, changePassword }) => {

    const [form] = Form.useForm();

    const onFinish = values => {
        console.log("manib=values",values)
        values['user_id']="U0200853dc-2eab-43ad-8b46-33fa77061d84"
        changePassword(values.user_id,values.new_password,values.old_password);
        form.resetFields();
    };


    return (
        <Card className="gx-card" title="Change Password">
            <Form
                {...formItemLayout}
                form={form}
                name="Category"
                onFinish={onFinish}
                initialValues={{
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="UserName"
                    label="User Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your UserName !',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="old_password"
                    label="Old Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Old Password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="new_password"
                    label="New Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your NewPassword!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="ConfirmPassword"
                    label="Confirm Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Area with ConfirmPassword',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Update
                </Button>
            </Form>
        </Card>
    );
};

export default ChangePasswordForm;

