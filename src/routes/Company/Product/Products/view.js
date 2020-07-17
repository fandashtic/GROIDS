import React, { Component } from 'react'
import { Card, Table, Space, Button } from "antd";
const data = [
    
];

const columns = [
    {
        title: 'SKU Code',
        dataIndex: 'SKU Code',
        key: 'SKU Code',
    },
    {
        title: 'Product Name',
        dataIndex: 'Product Name',
        key: 'Product Name',
    },
    {
        title: 'Manufacture',
        dataIndex: 'Manufacture',
        key: 'Manufacture',
    },
    {
        title: 'Brand',
        dataIndex: 'Brand',
        key: 'Brand',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button  type="primary" >View {record.name}</Button>
                <Button type="primary">Edit {record.name}</Button>
                <Button type="danger" >Delete</Button>
            </Space>
        ),
    },
];
export default class index extends Component {

    render() {
        return (
            <>
                <Table className="gx-table-responsive" columns={columns} dataSource={data} pagination={{pageSize: 50}}
             scroll={{y: 240}}/>
            </>
        )
    }
}
