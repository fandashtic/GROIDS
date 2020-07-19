import React from 'react';
import useForm from 'components/Shared/Useform';
import {
    Form,
    Input,
    Cascader,
    Button,
    Card,
} from 'antd';

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
    },
];

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
        <Card className="gx-card" title="Brand Form">
            <Form
                {...formItemLayout}
                form={form}
                name="Brand"
                onFinish={onFinish}
                initialValues={{
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="brand_name"
                    label="Brand Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Brand Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="manufacture_name"
                    label="Manufacture"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Manufacture!' },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>
                <Button type="danger">
                    Reset
                </Button>
                <Button type="primary"  htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );
};

export default From;

