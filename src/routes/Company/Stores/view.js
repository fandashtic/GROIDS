import React,{useEffect,useState}from 'react';
import { Table, Button, Space,PageHeader } from 'antd';
import {GetStoresAPI} from 'api/Controller/Store/StoreController'

const data = []

const filter ={status:true}
const columns = [
    {
        title: 'Store Name',
        dataIndex: 'store_name',
        key: 'store_name',
    },
    {
        title: 'Location ',
        dataIndex: 'billing_address',
        key: 'billing_address',
    },
    {
        title: 'City ',
        dataIndex: 'city_name',
        key: 'city_name',
    },
    {
        title: 'State ',
        dataIndex: 'state_name',
        key: 'state_name',
    },
    {
        title: 'Contact',
        dataIndex: 'mobilenumber',
        key: 'mobilenumber',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button type="primary" > View {record.name}</Button>
                <Button type="primary"> Edit {record.name}</Button>
                <Button type="danger" > Delete</Button>
            </Space>
        ),
    },
];




const View = ({storeList}) => {

    //const [storeList,setStoreList] = useState([])

    // useEffect(()=>{
    //     GetStoresAPI(filter,(res,err)=>{
    //         console.log(res)
    //         setStoreList(res.data)
    //     })
    // },[GetStoresAPI])


    return (
        <>
            <PageHeader className="site-page-header" title="Stores View"></PageHeader>
            <div>
                <Table className="gx-table-responsive" columns={columns} dataSource={storeList} pagination={{ pageSize: 50 }}
                 scroll={{ y: 240 }} />
            </div>
        </>
    )
}

export default View
