import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Select,
    Button,
    Card,
    Row,
    Col,
    Upload
} from 'antd';

import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

import { FileUpload } from 'api/Shared/Firestore';
import { PreFix } from 'api/Shared/Constant/Enum';
import { GetNewKey, GetFileExtn } from 'api/Shared/Util';

import { addData, LookUpData, getBrand, updateBrand } from './action'

import { useHistory } from "react-router-dom";
import { successNotification, updatedNotification, errorNotification } from 'components/Notification';

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

const Index = () => {
    const history = useHistory()
    const [form] = Form.useForm();
    const [image, setImage] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [manufactures, setManufactures] = useState([]);
    const [editView, setEditView] = useState(false);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    let location = history.location.pathname
    let id = location.substring(location.lastIndexOf('/') + 1)

    useEffect(() => {
        editForm()
        LookUpData().then(result => {
            if (result.err === null) {
                setManufactures(result.res.manufactures)
            }
        })
    }, [])

    const editForm = () => {
        if (id !== "add") {
            setEditView(true)
            getBrand(id).then(result => {
                form.setFieldsValue(result.res.data)
            })
        }
    }

    const onFinish = async values => {
        values['profile_image_url'] = "image.png"
        values['manufacture_name'] = manufactures.find(x => x.value === values.manufacture_id).label
        if (editView) {
            updateBrand(id, values).then(result => {
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

    const handleChange = e => {
        if (e.fileList[0]) {
            setFileList(e.fileList)
            var file = e.fileList[0];
            let newFile = new File([file], GetNewKey(PreFix.Brand) + '.' + GetFileExtn(file.name));
            console.log(newFile)
            if(newFile){
              //  setImage(newFile);
                upload()
            }   
        }
    };

    const upload = (newFile) => {
        console.log(newFile)
        // if (newFile) {
        //      return FileUpload(newFile, newFile.name, PreFix.Brand, setUrl, setProgress, (data, err) => {
        //         if (err) { return err }
        //         console.log(data)
        //     });
        // }

    }
    const toggle = () => {
        console.log(image)
        // return FileUpload(image, image.name, PreFix.Brand, setUrl, setProgress, (data, err) => {
        //     if (err) { return err }
        //     return data
        // });
    }

    return (
        <Card className="gx-card" title="Brand Form">
            <Form className="functionalForm"
                {...formItemLayout}
                form={form}
                name="Brand"
                onFinish={onFinish}
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
                            >
                                {manufactures !== null && manufactures.length > 0 ? manufactures.map(d => <Option key={d.value}>{d.label}</Option>) : ''}
                            </Select>
                        </Form.Item>

                    </Col>
                    <Col md={12} sm={24}>
                        <Form.Item
                            name="profile_image_url"
                            label="Brand Image"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input your Brand Image!',
                                },
                            ]}
                        >
                            <Upload
                                action={"//jsonplaceholder.typicode.com/posts/"}
                                listType="picture-card"
                                fileList={fileList}
                                onChange={handleChange}
                                onRemove={toggle}>

                                {fileList.length < 1 &&
                                    <div>
                                        <PlusOutlined />
                                        <div className="ant-upload-text">Brand Image</div>
                                    </div>
                                }
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

export default Index;

