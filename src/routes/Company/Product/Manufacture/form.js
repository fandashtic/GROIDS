import React from 'react';

import {
    Form,
    Input,
    Button,
    Card,
    Cascader
} from 'antd';

import useForm from 'components/Shared/Useform';
import {AddManufactureAPI} from 'api/Controller/Shared/ManufactureController';
import {GetDate} from 'api/Shared/Util';

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

const From = ({addData}) => {
    const [form] = Form.useForm();
    const onFinish = values => {
        values['company_id'] = "212435446"
        values['store_id'] = "1"
        values['profile_image_url'] = "test"
        values['status'] = true
        values['created_on'] = new Date()
        values['created_by'] = 1
        addData(values)
    };
    return (
        <Card className="gx-card" title="Manufacture Form">
            <Form
                {...formItemLayout}
                form={form}
                name="Manufacture"
                onFinish={onFinish}
                initialValues={{
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="manufacture_name" 
                    label="manufacturename"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Manufacture Name!',
                        },
                    ]}
                >
                    <Input/>
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
                <Button type="danger">
                    Reset
                </Button>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );
};

export default From;

