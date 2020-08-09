import React, { useState, useEffect } from 'react';

import {
    Form,
    Input,
    Button,
    Card,
    Upload,
    Row,
    Col,
    Select
} from 'antd';

import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

import { FileUpload } from 'api/Shared/Firestore';
import { PreFix } from 'api/Shared/Constant/Enum';
import { GetNewKey, GetFileExtn } from 'api/Shared/Util';

import { getData, updateData, addData } from './action';

import { useHistory } from "react-router-dom";

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



const From = () => {
    const history = useHistory()
    const [form] = Form.useForm();
    const [image, setImage] = useState(null);
    const [fileList, setFileList] = useState([]);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [editView, setEditView] = useState(false);


    let location = history.location.pathname
    let id = location.substring(location.lastIndexOf('/') + 1)

    useEffect(() => {
        editForm()
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

    const handleChange = e => {
        if (e.fileList[0]) {
            setFileList(e.fileList)
            var file = e.fileList[0];
            let newFile = new File([file], GetNewKey(PreFix.Brand) + '.' + GetFileExtn(file.name));
            setImage(newFile);
        }
    };

    // const upload = async () => {
    //        FileUpload(image, image.name, PreFix.Brand, setUrl, setProgress, (data,err)=>{
    //            return true
    //        });
    // }

    const onRemoveChange = () => {
        setFileList([])
        setImage(null)
    }



    return (
        <Card className="gx-card" title="Manufacture Form">
            <Form className="functionalForm"
                {...formItemLayout}
                form={form}
                name="Manufacture"
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
                            name="manufacture_name"
                            label="Manufacturer Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Manufacture Name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col md={12} sm={24}>
                        <Col md={12} sm={24}>
                            <Form.Item
                                name="profile_image_url"
                                label="Manufacture Image"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Please input your Manufacture Image!',
                                    },
                                ]}
                            >
                                <Upload
                                    action=''
                                    listType="picture-card"
                                    fileList={fileList}
                                    onRemove={onRemoveChange}
                                    onChange={handleChange}
                                >
                                    {fileList.length < 1 &&
                                        <div>
                                            <PlusOutlined />
                                            <div className="ant-upload-text">Brand Image</div>
                                        </div>
                                    }
                                </Upload>
                            </Form.Item>
                        </Col>
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

export default From;

