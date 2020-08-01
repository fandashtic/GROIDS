import React,{useEffect,useState} from 'react';
import {
    Form,
    Input,
    Cascader,
    Button,
    PageHeader,
    Upload,
    Row,
    Col
} from 'antd';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import {StoreLookUp} from 'api/Shared/Master/StoreController';
import {StoreType} from 'api/Shared/Constant/Enum'
let store_id = null

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
const FormView = ({addData}) => {
    const [form] = Form.useForm();
    const [selectValues,setSelectValues] = useState({})
    const onFinish = values => {
            values['company_id'] = "212435446"
            values['product_id'] = "1"
            values['profile_image_url'] = "test"
            values['status'] = true
            values['created_on'] = new Date()
            values['created_by'] = 1
        addData(values)
    };

    useEffect(()=>{
        StoreLookUp(store_id, (res,err)=>{
                setSelectValues(res)
            
        })
    },[])
    return (
        <>
            <PageHeader className="site-page-header" title="Stores Form" ></PageHeader>
            <Form className="functionalForm"
                {...formItemLayout}
                form={form}
                name="Store"
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
                    name="store_name"
                    label="Store Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="store_name"/>
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="store_type"
                    label="Store Type"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={StoreType} />
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                <Form.Item
                    name="billing_address"
                    label="Billing Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="billing_address"/>
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="shipping_address"
                    label="Shipping Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="shipping_address"/>
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                <Form.Item
                    name="area_name"
                    label="Area"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={selectValues.areas} />
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="city_name"
                    label="City"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={selectValues.cities} />
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                <Form.Item
                    name="state_name"
                    label="State"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={selectValues.states} />
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="country_name"
                    label="Country"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={selectValues.countries} />
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
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
                    <Input name="latitude"/>
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="email"/>
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                <Form.Item
                    name="mobilenumber"
                    label="Mobile number"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="mobilenumber"  />
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="contactperson"
                    label="Contact Person"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Input',
                        },
                    ]}
                >
                    <Input name="contactperson"  />
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                <Form.Item
                    name="tin"
                    label="TIN / GST Number"
                >
                    <Input name="contactperson"/>
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="logo"
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
                    >
                        <div>
                            <PlusOutlined />
                            <div className="ant-upload-text">Store Logo</div>
                        </div>
                    </Upload>
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                <Form.Item
                    name="banner"
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
                    >
                        <div>
                            <PlusOutlined />
                            <div className="ant-upload-text">Store banner</div>
                        </div>
                    </Upload>
                </Form.Item>
               </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="business_days_hours"
                    label="Business Days &amp; Hours"
                >
                    <Input name="business_days_hours"  />
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                <Form.Item
                    name="delivery_days_hours"
                    label="Delivery Days &amp; Hours"
                >
                    <Input name="delivery_days_hours" />
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="Status"
                    label="Status"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
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
                <Button type="primary"  htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
                </Col>
                </Row>
            </Form>
        </>
    );
};

export default FormView