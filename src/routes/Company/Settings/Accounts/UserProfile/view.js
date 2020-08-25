import React, { useState } from 'react'
import { Table, Tooltip, Space, Row, Col } from "antd";
import {Pagination} from 'appConfig.json';
import SweetAlert from "react-bootstrap-sweetalert";
import IntlMessages from "util/IntlMessages";
import { useHistory } from "react-router-dom";

const  UserProfileSettingView = ({Delete_User,deletedData,Profile}) => {
    const history = useHistory()
    const [tableView, setTableView] = useState(true);
    const [dataView, setDataView] = useState({});
    const [showDelete, setshowDelete] = useState(false);
    const [dataDelete, setDataDelete] = useState({});
    const columns = [

        {
            title: 'userName',
            dataIndex: 'user_name',
            key: 'user_name',
        },

        {
            title: 'CompanyName',
            dataIndex: 'company_name',
            key: 'company_name',
        },
        {
            title: 'Email',
            dataIndex: 'email_id',
            key: 'email_id',
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
                        <Tooltip title="Delete">
                            <span className="gx-text-danger gx-pointer" onClick={() => {deleteData(text)}}>
                                <i className="icon icon-trash gx-fs-xl gx-mr-2" />
                            </span>
                        </Tooltip>
    
                    </Space>
                )
            },
        },
    ];

    const onViewPanel = data => {
        console.log("data.user_id",data.user_id)
        history.push(`${history.location.pathname}/edit/${data.user_id}`)
    }
    const deleteData = data => {
        setshowDelete(true)
        setDataDelete(data.user_id)
    }

    const deleteFile = () => {
        setshowDelete(false)
        Delete_User(deletedData)
    }
    const onCancelDelete = () =>{
        setshowDelete(false)
    }


    return (
        <>
            {tableView ? <Table className="gx-table-responsive" columns={columns} dataSource={Profile} pagination={{ pageSize: Pagination }}
                scroll={{ y: 240 }} /> : (
                    <>
                        <div className="gx-module-box-topbar">
                            <Row justify="space-between">
                                <Col>
                                    <h2>Category Data</h2>
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
                        <div>userName: {dataView.user_name}</div>
                        <div>CompanyName: {dataView.company_name}</div>
                        <div>Email: {dataView.email_id}</div>
                        
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

export default UserProfileSettingView
