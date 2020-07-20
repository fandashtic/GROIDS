import React from 'react';
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

const ProductFrom = ({addData}) => {
    const [form] = Form.useForm();

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

    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // }

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
            >
                <Form.Item
                    name="product_category_name"
                    label="categoryname"
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
                    label="Manufacture"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Manufacture!' },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>
                <Form.Item
                    name="brand_name"
                    label="Brand"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Brand!' },
                    ]}

                >
                    <Cascader options={residences} />
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
                <Button type="danger">
                    Reset
                </Button>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );
};

export default ProductFrom;

