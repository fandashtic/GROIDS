import React from 'react';

import {
    Form,
    Input,
    Button,
    Card,
    Cascader
} from 'antd';

import useForm from 'components/Shared/Useform';
import {AddManufactureAPI} from 'api/Controller/Shared/ManufactureController'
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

const From = () => {

    const [form] = Form.useForm();
    const {handleChange,handleSubmit,values} = useForm()

    const submitData = () => {
        console.log('Received values of form: ', values);
        values['company_id'] = "212435446"
        values['store_id'] = "1"
        values['profile_image_url'] = "test"
        values['status'] = true
        values['created_on'] = new Date()
        values['created_by'] = 1
        console.log(values)
//}
       AddManufactureAPI(values,(data,err)=>{
           console.log('response', data)
           console.log('err',err)
       })
    };

  
    return (
        <Card className="gx-card" title="Manufacture Form">
            <Form
                {...formItemLayout}
                form={form}
                name="Manufacture"
                onFinish={handleSubmit}
                initialValues={{
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="Manufacture Name"
                    label="Manufacture Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Manufacture Name!',
                        },
                    ]}
                >
                    <Input name="manufacture_name" onChange={handleChange} />
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
                <Button type="primary" onClick={() =>submitData()} htmlType="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    );
};

export default From;

