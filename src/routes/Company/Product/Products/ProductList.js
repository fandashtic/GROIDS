import React, { Component } from 'react'
import { Card, Table, Space, Button } from "antd";
const data = [
    
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
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
                <Table columns={columns} dataSource={data} />
            </>
        )
    }
}
