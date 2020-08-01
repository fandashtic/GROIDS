import React , { useState, useEffect } from 'react';
import { BrandLookUp } from 'api/Shared/Master/BrandController';

import {
    Form,
    Input,
    Cascader,
    Button,
    Card,
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

const From = ({ addData }) => {

    const [form] = Form.useForm();
    let brand_id = null;
    const [LookUpData, setLookUpData] = useState({})

    const onFinish = values => {
        values['company_id'] = "212435446"
        values['store_id'] = "1"
        values['profile_image_url'] = "test"
        values['status'] = true
        values['created_on'] = new Date()
        values['created_by'] = 1
        addData(values)
    };

    useEffect(() => {
        BrandLookUp(brand_id, (data, err) => {
            setLookUpData(data);
        });

    }, [brand_id]);

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
                labelAlign="left"
                layout="inline"
            >
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
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
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="manufacture_name"
                    label="Manufacture"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Manufacture!' },
                    ]}
                >
                    <Cascader options={LookUpData.manufactures} />
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

