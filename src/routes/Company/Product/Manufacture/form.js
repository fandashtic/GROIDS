import React from 'react';

import {
    Form,
    Input,
    Button,
    Card,
    Cascader,
    Row,
    Col
} from 'antd';



const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 24 },
        md: { span: 24 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
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
            <Form className="functionalForm"
                {...formItemLayout}
                form={form}
                name="Manufacture"
                onFinish={onFinish}
                initialValues={{
                }}
                scrollToFirstError
                labelAlign="left"
                layout="inline"
            >
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
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
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="status"
                    label="Status"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your  Status!' },
                    ]}
                >
                    <Cascader options={status} />
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={24}>
                <Form.Item className="form-btn-center">
                <Button type="ghost">
                    Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
                </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default From;

