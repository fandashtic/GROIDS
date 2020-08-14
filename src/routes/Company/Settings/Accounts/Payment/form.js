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
import {CompanyLookUp} from 'api/Company/CompanyController';
import {StoreLookUp} from 'api/Shared/Master/StoreController';


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
let filter = { status: true }
const PaymentForm = ({editableDataToForm,addData}) => {

    const [form] = Form.useForm();
    const [companyLookUpData,setcompanyLookUpData] = useState({});
    const [storeLookUpData,setstoreLookUpData] = useState({});


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

    const companyInit=()=>{
        CompanyLookUp (filter,(res,err)=>{
            setcompanyLookUpData (res)
        })
        
    }
    const storeInit=()=>{
        StoreLookUp (filter,(res,err)=>{
            setstoreLookUpData (res)
        })
        
    }

    useEffect(()=>{
        companyInit();
        storeInit();
});
    return (
        <Card className="gx-card" title=" Payment">
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
                    name="payment_name"
                    label="paymentName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your payment_name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="payment_type"
                    label="paymentType"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your payment_type!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="company_name"
                    label="companyName"
                    rules={[
                        { type: 'array', required: true, message: 'Please input your company_name!', },
                    ]}
                >
                    <Cascader options={companyLookUpData.company_name} />
                </Form.Item>

                <Form.Item
                    name="store_name"
                    label="storeName"
                    rules={[
                        { type: 'array', required: true, message: 'Please input your storeName!', },
                    ]}
                >
                    <Cascader options={storeLookUpData.store_name} />
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
                <Form.Item>
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

export default PaymentForm;

