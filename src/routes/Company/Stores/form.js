import React from 'react';
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

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    return (
        <>
        <PageHeader className="site-page-header" title="Stores Form" ></PageHeader>
        <Form
            {...formItemLayout}
            form={form}
            name="Store"
            onFinish={onFinish}
            initialValues={{
            }}
            scrollToFirstError
        >
            <Form.Item
                name="Store Name"
                label="Store Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Store Name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Store Type"
                label="Store Type"
                rules={[
                    { type: 'array', required: true, message: 'Please select your Store Type!' },
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
                        message: 'Please input your Billing Address!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Shipping Address"
                label="Shipping Address"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Shipping Address!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Area"
                label="Area"
                rules={[
                    { type: 'array', required: true, message: 'Please select your Area!' },
                ]}
            >
                <Cascader options={status} />
            </Form.Item>
            <Form.Item
                name="City"
                label="City"
                rules={[
                    { type: 'array', required: true, message: 'Please select your City!' },
                ]}
            >
                <Cascader options={status} />
            </Form.Item>
            <Form.Item
                name="State"
                label="State"
                rules={[
                    { type: 'array', required: true, message: 'Please select your State!' },
                ]}
            >
                <Cascader options={status} />
            </Form.Item>
            <Form.Item
                name="Country"
                label="Country"
                rules={[
                    { type: 'array', required: true, message: 'Please select your Country!' },
                ]}
            >
                <Cascader options={status} />
            </Form.Item>
            <Form.Item
                name="Location"
                label="Location"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Location!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Email"
                label="Email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Mobile number"
                label="Mobile number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Mobile number!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Contact Person"
                label="Contact Person"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Contact Person!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Tin / GST Number"
                label="Tin / GST Number"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Store Logo"
                label="Store Logo"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Store Logo!',
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
                        <div className="ant-upload-text">Store Logo</div>
                    </div>
                </Upload>
            </Form.Item>
            <Form.Item
                name="Store banner image"
                label="Store banner image"
                rules={[
                    {
                        required: true,
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
                <Input />
            </Form.Item>
            <Form.Item
                name="Delivery Days & Hours"
                label="Delivery Days & Hours"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Status"
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
        </>
    );
};

export default FormView