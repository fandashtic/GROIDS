
import React , { useState, useEffect } from 'react';
import { ProductFamilyLookUp } from 'api/Shared/Master/ProductFamilyController';
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

const ProductFrom = ({addData}) => {
    const [form] = Form.useForm();
    let product_family_id = null;
    const [LookUpData, setLookUpData] = useState({})

    useEffect(() => {
        ProductFamilyLookUp(product_family_id, (data, err) => {
            setLookUpData(data);
        });

    }, [product_family_id]);

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
        <Card className="gx-card" title="Product Form">
            <Form
                {...formItemLayout}
                form={form}
                name="Product"
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
                    name="product_family_name"
                    label="Family Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Product Family Name!',
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
                    <Col md={12} sm={24}>
                <Form.Item
                    name="brand_name"
                    label="Brand"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Brand!' },
                    ]}

                >
                    <Cascader options={LookUpData.brands} />
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="product_category_name"
                    label="Category"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your  Category!' },
                    ]}
                >
                    <Cascader options={LookUpData.productCategories} />
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
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

export default ProductFrom;

