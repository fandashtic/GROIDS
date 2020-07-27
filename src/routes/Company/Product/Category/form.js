
import React , { useState, useEffect } from 'react';
import { ProductCategoryLookUp } from 'api/Shared/Master/ProductCategoryController';
import {
    Form,
    Input,
    Cascader,
   // Select,
    Button,
    Card,
  // Upload
} from 'antd';
//const { Option } = Select;


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

const ProductFrom = ({addData}) => {
    const [form] = Form.useForm();
    let category_id = null;
    const [LookUpData, setLookUpData] = useState({})

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

    useEffect(() => {
        ProductCategoryLookUp(category_id, (data, err) => {
            setLookUpData(data);
        });

    }, [category_id]);

    return (
        <Card className="gx-card" title="Product Form">
            <Form
                {...formItemLayout}
                form={form}
                name="Category"
                onFinish={onFinish}
                initialValues={{
                }}
                scrollToFirstError
                labelAlign="left"
            >
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
                <Form.Item
                    name="manufacture_name"
                    label="Manufacturer"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Manufacture!' },
                    ]}
                >
                    <Cascader options={LookUpData.manufactures} />
                </Form.Item>
                <Form.Item
                    name="brand_name"
                    label="Brand"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Brand!' },
                    ]}

                >
                    <Cascader options={LookUpData.brands} />
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

export default ProductFrom;

