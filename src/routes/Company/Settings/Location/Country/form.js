import React from 'react';

import {
    Form,
    Input,
    Cascader,
    // Select,
    Button,
    Card,
    // Upload
} from 'antd';
//const { Option } = Select;


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




const CountrySettingForm = ({ editableDataToForm, addData }) => {

    const [form] = Form.useForm();
    const onFinish = values => {
        console.log('Received values of form: ', values);
        values['company_id'] = "212435446"
        values['store_id'] = "1"
        values['status'] = true
        addData(values)
        form.resetFields()
    };
   

    return (
        <Card className="gx-card" title="Country Setting">
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
                    name="country_name"
                    label="countryName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your CountryName!',
                        },
                    ]}
                >
                    <Input/>
                    </Form.Item>
                <Button type="primary" htmlType="submit">
                    ADD
                </Button>
            </Form>
        </Card>
    );
};

export default CountrySettingForm;

