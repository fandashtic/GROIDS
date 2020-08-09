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

const CitySettingForm = ({ addData,cityLookUpData }) => {

    const{states} = cityLookUpData;
    const{countries} = cityLookUpData;
    const [form] = Form.useForm();
    const onFinish = values => {
        console.log('Received values of form: ', values);
        values['company_id'] = "212435446"
        values['store_id'] = "1"
        values['status'] = true
        values['state_name'] = states.find(x=> x.value === values.state_id).label
        values['country_name'] = countries.find (x => x.value === values.country_id).label
        addData(values)
        form.resetFields()
    };
  
    return (
        <Card className="gx-card" title="City Setting">
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
                    name="city_name"
                    label="cityName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your City Name!',
                        },
                    ]}
                >
                    <Input />
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
                        showArrow={false}
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

export default CitySettingForm;

