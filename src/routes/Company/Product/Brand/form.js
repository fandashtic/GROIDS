import React  from 'react';
import {
    Form,
    Input,
    Select,
    Button,
    Card,
    Row,
    Col
} from 'antd';

const Option = Select.Option;

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

const From = ({ addData,LookUpData }) => {

    const [form] = Form.useForm();
    const {manufactures} = LookUpData
    const onFinish = values => {
        values['company_id'] = "212435446"
        values['store_id'] = "1"
        values['profile_image_url'] = "test"
        values['status'] = true
        values['created_on'] = new Date()
        values['created_by'] = 1
        values['manufacture_name'] = manufactures.find(x => x.value === values.manufacture_id).label
        addData(values).then(res => form.resetFields())
       
    };

    return (
        <Card className="gx-card" title="Brand Form">
            <Form className="functionalForm"
                {...formItemLayout}
                form={form}
                name="Brand"
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
                    name="brand_name"
                    label="Brand Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Brand Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                <Form.Item
                    name="manufacture_id"
                    label="Manufacture"
                    rules={[
                        { required: true, message: 'Please select your Manufacture!' },
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
                        { manufactures !== null ? manufactures.map(d => <Option key={d.value}>{d.label}</Option>):''}
                    </Select>
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={24}>
                <Form.Item className="form-btn-center">
                <Button type="ghost">
                    Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
                </Col>
                </Row>
            </Form>
        </Card>
    );
};

export default From;

