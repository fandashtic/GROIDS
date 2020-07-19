import React from 'react';
import useForm from 'components/Shared/Useform';
import { AddStoreAPI } from 'api/Controller/Shared/StoreController'
import {
    Form,
    Input,
    Cascader,
    Button,
    PageHeader,
    Upload
} from 'antd';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";


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
const FormView = () => {

    const [form] = Form.useForm();
    // const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const { handleChange, handleSubmit, values } = useForm();

    const OnSubmitData = value => {

         if (window.find("Please Give your Input")!==true){
           
            console.log('Received values of form: ', values);
            values['company_id'] = "212435446"
            values['product_id'] = "1"
            values['profile_image_url'] = "test"
            values['status'] = true
            values['created_on'] = new Date()
            values['created_by'] = 1
            console.log(values)

            AddStoreAPI(values,(data,err)=>{
               console.log('response', data)
               console.log('err',err)
           })
    }else {
        console.log("Error")
    }

    }


    return (
        <>
            <PageHeader className="site-page-header" title="Stores Form" ></PageHeader>
            <Form
                {...formItemLayout}
                form={form}
                name="Store"
                onFinish={(e)=>handleSubmit}
                initialValues={{
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="store_name"
                    label="Store Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="store_name" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="Store Type"
                    label="Store Type"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>
                <Form.Item
                    name="Billing Address"
                    label="Billing Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="billing_address" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="Shipping Address"
                    label="Shipping Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="shipping_address" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="Area"
                    label="Area"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>
                <Form.Item
                    name="City"
                    label="City"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>
                <Form.Item
                    name="State"
                    label="State"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>
                <Form.Item
                    name="Country"
                    label="Country"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={residences} />
                </Form.Item>
                <Form.Item
                    name="Location"
                    label="Location"
                    rules={[
                        {
                            required: false,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="latitude" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="Email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="email" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="Mobile number"
                    label="Mobile number"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="mobilenumber" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="Contact Person"
                    label="Contact Person"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="contactperson" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="Tin / GST Number"
                    label="Tin / GST Number"
                >
                    <Input name="contactperson" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="Store Logo"
                    label="Store Logo"
                    rules={[
                        {
                            required: false,
                            message: 'Please Give your Input',
                        }
                    ]}
                >
                    <Upload
                        action="//jsonplaceholder.typicode.com/posts/"
                        listType="picture-card"
                        onChange={handleChange}
                    >
                        <div>
                            <PlusOutlined />
                            <div className="ant-upload-text">Store Logo</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="Store banner image"
                    label="Store banner image"
                    rules={[
                        {
                            required: false,
                            message: 'Please input your Store banner image!',
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
                            <div className="ant-upload-text">Store banner</div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="Store Slogan"
                    label="Store Slogan"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="Business Days & Hours"
                    label="Business Days & Hours"
                >
                    <Input name="business_days_hours" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="Delivery Days & Hours"
                    label="Delivery Days & Hours"
                >
                    <Input name="delivery_days_hours" onChange={handleChange} />
                </Form.Item>
                <Form.Item
                    name="Status"
                    label="Status"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={status} />
                </Form.Item>
                <Button type="danger">
                    Reset
                </Button>
                <Button type="primary" onClick={OnSubmitData} htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default FormView