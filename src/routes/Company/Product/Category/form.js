
import React from 'react';
import {
    Form,
    Input,
    Select,
    Button,
    Card,
    Upload,
  Row,
  Col
} from 'antd';
const { Option } = Select;


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

const ProductFrom = ({addData,LookUpData}) => {
    const [form] = Form.useForm();
    const {manufactures,brands} = LookUpData
    console.log(LookUpData)
    const onFinish = values => {
        console.log('Received values of form: ', values);
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
            <Form className="functionalForm"
                {...formItemLayout}
                form={form}
                name="Category"
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
                    name="product_category_name"
                    label="Category Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Category Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="manufacture_name"
                    label="Manufacturer"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Manufacture!' },
                    ]}
                >
                  <Select
                        showSearch
                        defaultActiveFirstOption={false}
                        showArrow={true}
                        filterOption={false}
                        allowClear
                        notFoundContent={null}
                    >
                        { manufactures !== null ? manufactures.map(d => <Option key={d.value}>{d.label}</Option>):''}
                    </Select>
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
                    <Select
                        showSearch
                        defaultActiveFirstOption={false}
                        showArrow={true}
                        filterOption={false}
                        allowClear
                        notFoundContent={null}
                    >
                        { brands !== null ? brands.map(d=> <Option key={d.value}>{d.label}</Option>):''}
                    </Select>
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

