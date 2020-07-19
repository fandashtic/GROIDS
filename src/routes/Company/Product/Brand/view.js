
import React, { useState } from 'react'
import { Table, Tooltip, Space, Row, Col } from "antd";
import SweetAlert from "react-bootstrap-sweetalert";
import IntlMessages from "util/IntlMessages";
import {Pagination} from 'appConfig.json';

const  View = ({editableData,brands,deletedData}) => {
    
    const [tableView, setTableView] = useState(true);
    const [dataView, setDataView] = useState({});
    const [showDelete, setshowDelete] = useState(false);
    const [dataDelete, setDataDelete] = useState({});
    const columns = [
        {
            title: 'Brand Name',
            dataIndex: 'brand_name',
            key: 'brand_id',
        },
        {
            title: 'Manufacture Name',
            dataIndex: 'manufacture_name',
            key: 'manufacture_id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text) => {
                return (
                    <Space size="middle">
                        <Tooltip title="View">
                            <span className="gx-text-info gx-pointer" onClick={() => onViewPanel(text)}>
                                <i className="icon icon-forward gx-fs-xl gx-mr-2" />
                            </span>
                        </Tooltip>
                        <Tooltip title="Edit">
                            <span className="gx-text-warning gx-pointer" onClick ={()=> {
                                editableData(text)
                            }}>
                                <i className="icon icon-feedback gx-fs-xl gx-mr-2" />
                            </span>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <span className="gx-text-danger gx-pointer" onClick={() => {
                                deleteData(text)
                            }}>
                                <i className="icon icon-trash gx-fs-xl gx-mr-2" />
                            </span>
                        </Tooltip>
    
                    </Space>
                )
            },
        },
    ];

    const deleteData = data => {
        setshowDelete(true)
        setDataDelete(data)
    }
    const onViewPanel = data => {
        setTableView(false)
        setDataView(data)
    }

    const deleteFile = () => {
        setshowDelete(false)
        deletedData(dataDelete.brand_id)
       
    }
    const onCancelDelete = () =>{
        setshowDelete(false)
    }

    return (
        <>
            {tableView ? <Table className="gx-table-responsive" columns={columns} dataSource={brands} pagination={{ pageSize: Pagination }}
                scroll={{ y: 240 }} /> : (
                    <>
                        <div className="gx-module-box-topbar">
                            <Row justify="space-between">
                                <Col>
                                    <h2>Brand Data</h2>
                                </Col>
                                <Col>
                                    <Tooltip title="Back List View">
                                        <span className=" gx-btn-block gx-text-primary gx-pointer">
                                            <i className="icon icon-reply gx-fs-xl gx-mr-2" />
                                        </span>
                                    </Tooltip>
                                </Col>
                            </Row>
                        </div>
                        <div>Brand: {dataView.brand_name}</div>
                        <div>Manufacture: {dataView.manufacture_name}</div>
                    </>
                )
            }
            <SweetAlert show={showDelete}
                showCancel
                confirmBtnText={<IntlMessages id="sweetAlerts.yesDeleteIt" />}
                confirmBtnBsStyle="danger"
                cancelBtnBsStyle="default"
                title={<IntlMessages id="sweetAlerts.areYouSure" />}
                onConfirm={deleteFile}
                onCancel={onCancelDelete}
            >
            </SweetAlert>
        </>
    )
}

export default View