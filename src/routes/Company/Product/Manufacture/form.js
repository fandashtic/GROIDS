import React from 'react';

import {
    Form,
    Input,
    Button,
    Card,
    Cascader
} from 'antd';



const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

const status = [
    {
        value: 'Active',
        label: 'Active',
    },
    {
        value: 'InActive',
        label: 'InActive',
    },
];

const From = ({addData}) => {
    const [form] = Form.useForm();
    const onFinish = values => {
        values['company_id'] = "212435446"
        values['store_id'] = "1"
        values['profile_image_url'] = "test"
        values['status'] = true
        values['created_on'] = new Date()
        values['created_by'] = 1
        addData(values)
    };
    return (
        <Card className="gx-card" title="Manufacture Form">
            <Form
                {...formItemLayout}
                form={form}
                name="Manufacture"
                onFinish={onFinish}
                initialValues={{
                }}
                scrollToFirstError
                labelAlign="left"
            >
                <Form.Item
                    name="manufacture_name" 
                    label="Manufacturer Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Manufacture Name!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="status"
                    label="Status"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your  Status!' },
                    ]}
                >
                    <Cascader options={status} />
                </Form.Item>
                <Form.Item className="form-btn-center">
                <Button type="ghost">
                    Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default From;

