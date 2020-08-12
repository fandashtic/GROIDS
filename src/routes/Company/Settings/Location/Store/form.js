import React,{useEffect,useState} from 'react';
import {
    Form,
    Input,
    Cascader,
    Button,
    PageHeader,
    Upload,
} from 'antd';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import {StoreLookUp} from 'api/Shared/Master/StoreController';
import {StoreType} from 'api/Shared/Constant/Enum'
let store_id = null

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
const StoreSettingForm = ({addData}) => {
    const [form] = Form.useForm();
    const [selectValues,setSelectValues] = useState({})
    const onFinish = values => {
            values['company_id'] = "212435446"
            values['product_id'] = "1"
            values['profile_image_url'] = "test"
            values['status'] = true
            values['created_on'] = new Date()
            values['created_by'] = 1
        addData(values)
    };

    useEffect(()=>{
        StoreLookUp(store_id, (res,err)=>{
                setSelectValues(res)
            
        })
    },[])
    return (
        <>
            <PageHeader className="site-page-header" title="Stores Setting" ></PageHeader>
            <Form
                {...formItemLayout}
                form={form}
                name="Store"
                onFinish={onFinish}
                initialValues={{
                }}
                scrollToFirstError
            >
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
                    <Input name="store_name"/>
                </Form.Item>
                <Form.Item
                    name="store_type"
                    label="Store Type"
                    rules={[
                        { type: 'array', required: true, message: 'Please Give your Input' },
                    ]}
                >
                    <Cascader options={StoreType} />
                </Form.Item>
                
                <Button type="danger">
                    Reset
                </Button>
                <Button type="primary"  htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default StoreSettingForm 
