import React, { useState,useEffect } from 'react';
import {
    Form,
    Input,
    Cascader,
    Button,
    Card,
    Select,
    Upload
} from 'antd';

import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
//import {CompanyLookUp} from 'api/Company/CompanyController';
//import {StoreLookUp} from 'api/Shared/Master/StoreController';
const { Option } = Select;

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
        md: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

// const product_id =null
// let filter = { status: true }

const UserProfileSettingForm = ({editableDataToForm,addData,storeData,companyData}) => {
    const [form] = Form.useForm();
   // const {store_name} = storeData;
    //const {company_name} = companyData;
    
    const handleChange = () => {
       
        }
   
    const onFinish = values => {
        values['company_id'] = "212435446"
        values['store_id'] = "1"
        values['profile_image_url'] = "test"
        values['status'] = true;
       // values['store_name']=store_name.find(x=>x.values===values.store_id).label;
        //values['company_name'] = company_name.find(x=>x.values ===values.company_id);
        addData(values);
        console.log("mani",values);
        form.resetFields();
    };

    // const companyInit=()=>{
    //     CompanyLookUp (filter,(res,err)=>{
    //         setcompanyLookUpData (res)
    //     })
        
    // }
    // const storeInit=()=>{
    //     StoreLookUp (filter,(res,err)=>{
    //         setstoreLookUpData (res)
    //     })
        
    // }

    // useEffect(()=>{
    //     companyInit();
    //     storeInit();
    // });




    return (
        <Card className="gx-card" title="User Profile">
            <Form
                {...formItemLayout}
                form={form}
                name="Product"
                onFinish={onFinish}
                initialValues={{
                }}
                scrollToFirstError
                labelAlign="left"
            >
                <Form.Item
                    name="email_id"
                    label="Email_id"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email_id!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="user_name"
                    label="UserName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your user_name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="first_name"
                    label="FirstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your firstName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    name="last_name"
                    label="LastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your LastName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                
                <Form.Item
                    name="user_type"
                    label="UserType"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your user_type!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="company_name"
                    label="companyName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your companyName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="store_name"
                    label="storeName"
                    rules={[
                        {
                            required: false,
                            message: 'Please input your companyName!',
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
                <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default UserProfileSettingForm;

