
import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Select,
    Button,
    Card,
    Upload,
    Row,
    Col
} from 'antd';

import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

import { FileUpload } from 'api/Shared/Firestore';
import { PreFix } from 'api/Shared/Constant/Enum';
import { GetNewKey, GetFileExtn } from 'api/Shared/Util';

import { useHistory } from "react-router-dom";
import { getData, updateData, LookUpData, addData } from './action';
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

const ProductFrom = () => {
    const history = useHistory()
    const [form] = Form.useForm();
    const [editView, setEditView] = useState(false);
    const [image, setImage] = useState(null);
    const [manufactures, setManufactures] = useState([]);
    const [brands, setBrands] = useState([]);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    let location = history.location.pathname
    let id = location.substring(location.lastIndexOf('/') + 1)


    useEffect(() => {
        editForm()
        LookUpData().then(result => {
            if (result.err === null) {
                setManufactures(result.res.manufactures)
                setBrands(result.res.brands)
                console.log(result.res.brands)
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

    const onFinish = async values => {
        values['manufacture_name'] = manufactures.find(x => x.value === values.manufacture_id).label
        values['brand_name'] = brands.find(x => x.value === values.brand_id).label
        values['profile_image_url'] = "image.png"
        if (editView) {
            updateData(id, values).then(result => {
                if (result.err) {
                    console.log(result.err)
                }
                else {
                    console.log(result.res)
                    form.resetFields();
                }
            })
        }
        else {
            addData(values).then(result => {
                if (result.err) {
                    console.log(result.err)
                }
                else {
                    console.log(result.res)
                    form.resetFields();
                }
            })
        }
    };

    const onSelectChange = e => {
        let brandsData = []
        let data = brands.find(x => x.dependent === e)
        if (data !== undefined) {
            brandsData.push(data)
        }
        setBrands(brandsData)
    }

    const onPreview = async file => {
        console.log(file)
        // let src = file.url;
        // if (!src) {
        //   src = await new Promise(resolve => {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(file.originFileObj);
        //     reader.onload = () => resolve(reader.result);
        //   });
        // }
        // const image = new Image();
        // image.src = src;
        // const imgWindow = window.open(src);
        // imgWindow.document.write(image.outerHTML);
    };

    const handleChange = e => {
        if (e.fileList[0]) {
            var file = e.fileList[0];
            let newFile = new File([file], GetNewKey(PreFix.Brand) + '.' + GetFileExtn(file.name));
            setImage(newFile);
        }
    };
    const upload = () => {
        return FileUpload(image, image.name, PreFix.Brand, setUrl, setProgress, (data, err) => {
            if (err) { return err }
            return data
        });
    }

    return (
        <Card className="gx-card" title="Product Form">
            <Form className="functionalForm"
                {...formItemLayout}
                form={form}
                name="Category"
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
                            name="product_category_name"
                            label="Category Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Category Name!',
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
                            >
                                {brands !== null && brands.length > 0 ? brands.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>

                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="profile_image_url"
                            label="Product Category Image"
                        >
                            <Upload
                                action=''
                                listType="picture-card"
                                onChange={handleChange}
                                onPreview={onPreview}
                            >
                                <div>
                                    <PlusOutlined />
                                    <div className="ant-upload-text">Product Category Image</div>
                                </div>
                            </Upload>
                        </Form.Item>

                    </Col>
                    {editView && <Col md={12} sm={24}>
                        <Form.Item
                            name="status"
                            label="Status"
                            rules={[
                                { required: true, message: 'Please select your Status!' },
                            ]}
                        >
                            <Select
                                showSearch
                                defaultActiveFirstOption={true}
                                showArrow={true}
                                allowClear
                            >
                                <Option key="true">active</Option>
                                <Option key="false">In-Active</Option>
                            </Select>
                        </Form.Item>
                    </Col>}
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

