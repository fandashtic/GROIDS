import React, { useState,useEffect } from 'react';
import {
    Form,
    Input,
    Cascader,
    Button,
    Card,
    Upload,
    Row,
    Col
} from 'antd';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import {ProductLookUp} from 'api/Shared/Master/ProductController';

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

const ProductFrom = ({editableDataToForm,addData}) => {
    const [selectValues,setSelectValues] = useState({})
    const [form] = Form.useForm();
    const product_id = ''; 
    useEffect(()=>{
        ProductLookUp(product_id,(res,err)=>{
            console.log(res)
        setSelectValues(res)})
    },[])

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    const onFinish = values => {
        values['company_id'] = "212435446"
        values['store_id'] = "1"
        values['profile_image_url'] = "test"
        values['status'] = true
        values['created_on'] = new Date()
        values['created_by'] = 1
        addData(values)
        form.resetFields()
    };
    return (
        <Card className="gx-card" title="Product Form">
            <Form className="functionalForm"
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
                        name="product_name"
                        label="Product Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Product Name!',
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
                    <Cascader options={selectValues.manufactures} />
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
                    <Cascader options={selectValues.brands} />
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
                    <Cascader options={selectValues.productCategories} />
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                <Form.Item
                    name="product_family_name"
                    label="Product Family"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Product Family!' },
                    ]}
                >
                    <Cascader options={selectValues.product_families} />
                </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Description!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                <Form.Item
                    name="profile_image_url"
                    label="Product Image"
                    rules={[
                    {
                        required: false,
                        message: 'Please input your Product Image!',
                    },
                    ]}
                >
                    <Upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        listType="picture-card"
                        onChange={handleChange}
                    >
                        <div>
                            <PlusOutlined />
                            <div className="ant-upload-text">Product Image</div>
                        </div>
                    </Upload>
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

export default ProductFrom;

