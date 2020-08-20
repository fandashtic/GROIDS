
import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Select,
    Button,
    Card,
    Row,
    Upload,
    Col
} from 'antd';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

import { FileUpload } from 'api/Shared/Firestore';
import { PreFix } from 'api/Shared/Constant/Enum';
import { GetNewKey, GetFileExtn } from 'api/Shared/Util';

import { useHistory } from "react-router-dom";
import { getData, updateData, LookUpData, addData } from './action';
import {successNotification,updatedNotification,errorNotification} from 'components/Notification';
const { Option } = Select



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

const ProductFrom = () => {
    const history = useHistory()
    const [form] = Form.useForm();
    const [editView, setEditView] = useState(false);
    const [manufactures, setManufactures] = useState([]);
    const [brands, setBrands] = useState([]);
    const [image, setImage] = useState(null);
    const [productCategories, setProductCategories] = useState([]);
    const [productFamily, setProductFamily] = useState([]);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    let location = history.location.pathname
    let id = location.substring(location.lastIndexOf('/') + 1)


    useEffect(() => {
        editForm()
        LookUpData().then(result => {
            if (result.err === null) {
                console.log(result.res)
                setManufactures(result.res.manufactures)
                setBrands(result.res.brands)
                setProductCategories(result.res.productCategories)
                setProductFamily(result.res.product_families)
            }
        })
    }, [])

    const editForm = () => {
        if (id !== "add") {
            setEditView(true)
            getData(id).then(result => {
                form.setFieldsValue(result.res.data)
            })
        }
    }

    const onSelectChange = e => {
        let brandsData = []
        let data = brands.find(x => x.dependent === e)
        if (data !== undefined) {
            brandsData.push(data)
        }
        setBrands(brandsData)
    }
    const onSelectBrandChange = e => {
        let dataList = []
        let data = productCategories.find(x => x.dependent === e)
        if (data !== undefined) {
            dataList.push(data)
        }
        setProductCategories(dataList)
    }

    const onSelectCategoryChange = e => {
        let dataList = []
        let data = productFamily.find(x => x.dependent === e)
        if (data !== undefined) {
            dataList.push(data)
        }
        setProductFamily(dataList)
    }

    const handleChange = e => {
        if (e.fileList[0]) {
            var file = e.fileList[0];
            let newFile = new File([file], GetNewKey(PreFix.Brand) + '.' + GetFileExtn(file.name));
            setImage(newFile);
        }
    };
    // const upload = () => {
    //     return FileUpload(image, image.name, PreFix.Brand, setUrl, setProgress, (data, err) => {
    //         if (err) { return err }
    //         return data
    //     });
    // }
    const onFinish = async values => {
        values['manufacture_name'] = manufactures.find(x => x.value === values.manufacture_id).label
        values['brand_name'] = brands.find(x => x.value === values.brand_id).label
        values['product_category_name'] = productCategories.find(x => x.value === values.product_category_id).label
        values['product_family_name'] = productFamily.find(x => x.value === values.product_family_id).label
        values['profile_image_url'] = "image.png"
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
    return (
        <Card className="gx-card" title="Product Form">
            <Form className="functionalForm"
                {...formItemLayout}
                form={form}
                name="Product"
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
                            name="product_name"
                            label="Product Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Product Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="manufacture_id"
                            label="Manufacturer"
                            rules={[
                                { required: true, message: 'Please select your Manufacture!' },
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
                                {manufactures !== null && manufactures.length > 0 ? manufactures.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="brand_id"
                            label="Brand"
                            rules={[
                                { required: true, message: 'Please select your Brand!' },
                            ]}
                        >
                            <Select
                                showSearch
                                defaultActiveFirstOption={false}
                                showArrow={true}
                                filterOption={false}
                                allowClear
                                notFoundContent={null}
                                onChange={onSelectBrandChange}
                            >
                                {brands !== null && brands.length > 0 ? brands.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="product_category_id"
                            label="Category"
                            rules={[
                                { required: true, message: 'Please select your Category!' },
                            ]}
                        >
                            <Select
                                showSearch
                                defaultActiveFirstOption={false}
                                showArrow={true}
                                filterOption={false}
                                allowClear
                                notFoundContent={null}
                                onChange={onSelectCategoryChange}
                            >
                                {productCategories !== null && productCategories.length > 0 ? productCategories.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>

                    </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="product_family_id"
                            label="Product Family"
                            rules={[
                                { required: true, message: 'Please select your Product Family!' },
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
                                {productFamily !== null && productFamily.length > 0 ? productFamily.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>

                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="description"
                            label="Description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Description!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 0]}>
                    <Col md={12} sm={24}>
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
                    </Col>
                </Row>
                <Row gutter={[8, 0]}>
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
        </Card>
    );
};

export default ProductFrom;

