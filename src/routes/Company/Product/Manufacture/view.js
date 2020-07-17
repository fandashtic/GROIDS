import React, { Component } from 'react'
import {  Table, Space,Tooltip } from "antd";

const columns = [
    {
        title: 'Manufacture Name',
        dataIndex: 'manufacture_name',
        key: 'manufacture_id',
        render: (text, record) => {
            return <div className="gx-flex-row gx-align-items-center">
              <img className="gx-rounded-circle gx-size-30 gx-mr-2" src={"https://via.placeholder.com/150"} alt=""/>
              <p className="gx-mb-0">{record.manufacture_name}</p>
            </div>
          },
    },
    
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Tooltip title="View">
                <span className="gx-text-info gx-pointer">
                     <i className="icon icon-forward gx-fs-xl gx-mr-2"/>
                </span>
                </Tooltip>
                <Tooltip title="Edit">
                <span className="gx-text-warning gx-pointer">
                <i className="icon icon-feedback gx-fs-xl gx-mr-2"/>
                </span>
                </Tooltip>
                <Tooltip title="Delete">
                <span className="gx-text-danger gx-pointer">
                    <i className="icon icon-trash gx-fs-xl gx-mr-2"/>
                </span>
                </Tooltip>
              
            </Space>
        ),
    },
];
export default class index extends Component {

    render() {
        const {data} = this.props.data
        return (
            <>
                <Table className="gx-table-responsive" columns={columns} dataSource={data} pagination={{pageSize: 50}}
             scroll={{y: 240}} />
            </>
        )
    }
}
