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

let filter = { status: true }

const AreaSettingForm = ({ editableDataToForm, addData,areaLookUpData}) => {

   const [form] = Form.useForm();
   const {states} =  areaLookUpData;
   const {countries} = areaLookUpData
    const{cities} =  areaLookUpData
   
    const onFinish = values => {
        console.log('Received values of form: ', values);
        values['company_id'] = "212435446"
        values['store_id'] = "1"
       values['state_name']= states.find(x => x.value === values.state_id).label
        values['country_name'] = countries.find (x => x.value === values.country_id).label
        values['city_name'] = cities.find(x=> x.value===values.city_id).label
      
        addData(values)
        form.resetFields()

    };
    return (
        <Card className="gx-card" title="Area Setting">
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
                    name="area_name"
                    label="Area_Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Country Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="city_id"
                    label="city_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your city_name !',
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
                        {cities !== null && cities?cities.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                    </Select>
                </Form.Item>



                <Form.Item
                    name="state_id"
                    label="state_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please Give your state_name !',
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
                        {states !== null && states? states.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                    </Select>
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
                        {countries !== null && countries? countries.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                    </Select>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );
};

export default AreaSettingForm;

