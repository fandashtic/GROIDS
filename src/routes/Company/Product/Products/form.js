import React, { useState,useEffect } from 'react';
import {
    Form,
    Input,
    Cascader,
    Button,
    Card,
    Upload
} from 'antd';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import {ProductLookUpAPI} from 'api/Controller/Shared/ProductController';

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
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
// const tailFormItemLayout = {
//     wrapperCol: {
//         xs: {
//             span: 24,
//             offset: 0,
//         },
//         sm: {
//             span: 16,
//             offset: 8,
//         },
//     },
// };


const product_id =null
const ProductFrom = ({editableDataToForm,addData}) => {
    const [selectValues,setSelectValues] = useState({})
    const [form] = Form.useForm();

    useEffect(()=>{
        ProductLookUpAPI(product_id,(res,err)=>{
                console.log(">>>>",res)
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
            >
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
                <Form.Item
                    name="manufacture_name"
                    label="Manufacture"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Manufacture!' },
                    ]}
                >
                    <Cascader options={selectValues.manufactures} />
                </Form.Item>
                <Form.Item
                    name="brand_name"
                    label="Brand"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Brand!' },
                    ]}

                >
                    <Cascader options={selectValues.brands} />
                </Form.Item>
                <Form.Item
                    name="product_category_name"
                    label="Category"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your  Category!' },
                    ]}
                >
                    <Cascader options={selectValues.productCategories} />
                </Form.Item>

                <Form.Item
                    name="product_family_name"
                    label="Product Family"
                    rules={[
                        { type: 'array', required: true, message: 'Please select your Product Family!' },
                    ]}
                >
                    <Cascader options={selectValues.product_families} />
                </Form.Item>

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

