import React, { Component } from 'react'
import { Card, Table, Space, Button } from "antd";
const data = [
    
];

const columns = [
    {
        title: 'Category Name',
        dataIndex: 'Category Name',
        key: 'Category Name',
    },
    {
        title: 'Manufacture Name',
        dataIndex: 'Manufacture Name',
        key: 'Manufacture Name',
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
                <Table columns={columns} dataSource={data} pagination={{pageSize: 50}}
             scroll={{y: 240}}/>
            </>
        )
    }
}
