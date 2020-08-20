import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Select,
    Button,
    Row,
    Col,
    Upload,
    PageHeader
} from 'antd';

import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { StoreType } from 'api/Shared/Constant/Enum'
import { FileUpload } from 'api/Shared/Firestore';
import { PreFix } from 'api/Shared/Constant/Enum';
import { GetNewKey, GetFileExtn } from 'api/Shared/Util';

import { addData, LookUpData, getData, updateData } from './action'
import { DefaultImage } from 'appConfig.json'
import { useHistory } from "react-router-dom";
import { successNotification, updatedNotification, errorNotification } from 'components/Notification';

let store_id = null
const { Option } = Select;
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

const FormView = () => {
    const history = useHistory()
    const [form] = Form.useForm();
    const [lookup, setLookup] = useState({})
    const [editView, setEditView] = useState(false);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");

    const { areas, cities, states, countries } = lookup


    let location = history.location.pathname
    let id = location.substring(location.lastIndexOf('/') + 1)

    useEffect(async () => {
        editForm()
        let result = await LookUpData(store_id)
        setLookup(result.res)
    }, [store_id])

    const editForm = () => {
        if (id !== "add") {
            setEditView(true)
            getData(id).then(result => {
                form.setFieldsValue(result.res.data)
            })
        }
    }

    const onFinish = async values => {
        values["store_type_id"] = StoreType.find(x => x.value === values.store_type_id).label
        values['area_name'] = areas.find(x => x.value === values.area_id).label
        values['city_name'] = cities.find(x => x.value === values.city_id).label
        values['state_name'] = states.find(x => x.value === values.state_id).label
        values['country_name'] = countries.find(x => x.value === values.country_id).label
        values['logo'] = image ? image : DefaultImage
        values['banner'] = image ? image : DefaultImage

        if (editView) {
            updateData(id, values).then(result => {
                if (result.err) {
                    errorNotification()
                }
                else {
                    updatedNotification()
                    form.resetFields();
                }
            })
        }
        else {
            addData(values).then(result => {
                if (result.err) {
                    errorNotification()
                }
                else {
                    successNotification()
                    form.resetFields();
                }
            })
        }
    };

    const onSelectChange = e => {
        console.log(e)
    }

    return (
        <>
            <PageHeader className="site-page-header" title="Stores Form" ></PageHeader>
            <Form className="functionalForm"
                {...formItemLayout}
                form={form}
                name="Store"
                onFinish={onFinish}
                scrollToFirstError
                labelAlign="left"
                layout="inline"
            >
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="store_name"
                            label="Store Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Give your Input',
                                },
                            ]}
                        >
                            <Input name="store_name" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="store_type_id"
                            label="Store Type"
                            rules={[
                                {  required: true, message: 'Please Give your Input' },
                            ]}
                        >
                            <Select
                                showSearch
                                defaultActiveFirstOption={false}
                                showArrow={true}
                                filterOption={false}
                                allowClear
                                notFoundContent={null}
                                onChange={onSelectChange}
                            >
                                {StoreType !== null && StoreType.length > 0 ? StoreType.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="billing_address"
                            label="Billing Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Give your Input',
                                },
                            ]}
                        >
                            <Input name="billing_address" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="shipping_address"
                            label="Shipping Address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Give your Input',
                                },
                            ]}
                        >
                            <Input name="shipping_address" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="area_id"
                            label="Area"
                            rules={[
                                {  required: true, message: 'Please Give your Input' },
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
                                {areas !== undefined && areas.length > 0 ? areas.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="city_id"
                            label="City"
                            rules={[
                                {  required: true, message: 'Please Give your Input' },
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
                                {cities !== undefined && cities.length > 0 ? cities.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="state_id"
                            label="State"
                            rules={[
                                {  required: true, message: 'Please Give your Input' },
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
                                {states !== undefined && states.length > 0 ? states.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="country_id"
                            label="Country"
                            rules={[
                                {  required: true, message: 'Please Give your Input' },
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
                                {countries !== undefined && countries.length > 0 ? countries.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="latitude"
                            label="Latitude"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please Give your Input',
                                },
                            ]}
                        >
                            <Input name="latitude" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="longtitude"
                            label="Longtitude"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please Give your Input',
                                },
                            ]}
                        >
                            <Input name="longtitude" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Give your Input',
                                },
                            ]}
                        >
                            <Input name="email" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="mobilenumber"
                            label="Mobile number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Give your Input',
                                },
                            ]}
                        >
                            <Input name="mobilenumber" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="contactperson"
                            label="Contact Person"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Give your Input',
                                },
                            ]}
                        >
                            <Input name="contactperson" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="tin"
                            label="TIN / GST Number"
                        >
                            <Input name="contactperson" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="logo"
                            label="Store Logo"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please Give your Input',
                                }
                            ]}
                        >
                            <Upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                            >
                                <div>
                                    <PlusOutlined />
                                    <div className="ant-upload-text">Store Logo</div>
                                </div>
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="banner"
                            label="Store banner image"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input your Store banner image!',
                                },
                            ]}
                        >
                            <Upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                            >
                                <div>
                                    <PlusOutlined />
                                    <div className="ant-upload-text">Store banner</div>
                                </div>
                            </Upload>
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="business_days_hours"
                            label="Business Days &amp; Hours"
                        >
                            <Input name="business_days_hours" />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="delivery_days_hours"
                            label="Delivery Days &amp; Hours"
                        >
                            <Input name="delivery_days_hours" />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item className="form-btn-center">
                            <Button type="ghost">
                                Cancel
                            </Button>
                            {editView ?
                                (<Button type="primary" htmlType="submit" >
                                    Update
                                </Button>)
                                :
                                (<Button type="primary" htmlType="submit">
                                    Submit
                                </Button>)
                            }
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default FormView