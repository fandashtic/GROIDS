
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
      
        const CompanyProfileform = ({editableDataToForm,addData}) => {
        const [selectValues, setSelectValues] = useState({})
        const [form] = Form.useForm();
       
      

        const onFinish = values => {
            console.log("Mani")
            values['company_id'] = "1"
            values['store_id'] = "1"
            addData(values)
            form.resetFields()
          
        };


    return (
        <Card className="gx-card" title="Company Profile">
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
                    name="company_name"
                    label="Company Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Company Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email_id"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Company Email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="mobilenumber"
                    label="Mobile No"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Company Mobile No!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    name="contactperson"
                    label="ContactPersonName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Company Contact PersonName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
               
                <Form.Item
                    name="billing_address"
                    label="BillingAddress1"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Company Contact BillingAddress1!',
                        },
                    ]}
                >
                    <Input />
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
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );
};

export default CompanyProfileform;

