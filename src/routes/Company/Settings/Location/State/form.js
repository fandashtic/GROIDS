import React, { useState, useEffect } from 'react';

import {
    Form,
    Input,
    Cascader,
    Select,
    Button,
    Card,
    // Upload
} from 'antd';

const { Option } = Select;


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

const state_id = "";
const country_id = "";

const StateSettingForm = ({ editableDataToForm, addData, StateLookUpdata }) => {

    const [form] = Form.useForm();
    console.log(StateLookUpdata)
    const {countries}=StateLookUpdata;
    const onFinish = values => {
        console.log('Received values of form: ', values);
         values['company_id'] = "212435446"
        values['store_id'] = "1"
         values['countries'] = countries.find(x => x.value === values.country_id).label
        console.log("values",values)
         addData(values);
        form.resetFields()
    };


    return (
        <Card className="gx-card" title="State Setting">
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
                    name="state_name"
                    label="stateName"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your stateName !',
                        },
                    ]}
                >
                    <Input />

                </Form.Item>

                <Form.Item
                    name="country_id"
                    label="Country Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your Country Name !',
                        },
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
                        { countries && countries !== null ? countries.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                    </Select>
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    ADD
                </Button>
            </Form>
        </Card>
    );
};

export default StateSettingForm;

