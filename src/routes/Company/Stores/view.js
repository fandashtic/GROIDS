import React from 'react'
import { Table, Button, Space,PageHeader } from 'antd'
const data = []
const columns = [
    {
        title: 'Store Name',
        dataIndex: 'Store Name',
        key: 'Store Name',
    },
    {
        title: 'Location ',
        dataIndex: 'Location',
        key: 'Location',
    },
    {
        title: 'City ',
        dataIndex: 'City',
        key: 'City',
    },
    {
        title: 'State ',
        dataIndex: 'State',
        key: 'State',
    },
    {
        title: 'Contact',
        dataIndex: 'Contact ',
        key: 'Contact',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Button type="primary" >View {record.name}</Button>
                <Button type="primary">Edit {record.name}</Button>
                <Button type="danger" >Delete</Button>
            </Space>
        ),
    },
];
function view() {
    return (
        <>
            <PageHeader className="site-page-header" title="Stores View"></PageHeader>
            <div>
                <Table className="gx-table-responsive" columns={columns} dataSource={data} pagination={{ pageSize: 50 }}
                    scroll={{ y: 240 }} />
            </div>
        </>
    )
}

export default view
