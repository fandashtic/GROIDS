
import React, { useState } from 'react'
import { Table, Tooltip, Space, Row, Col } from "antd";
import SweetAlert from "react-bootstrap-sweetalert";
import IntlMessages from "util/IntlMessages";
import {Pagination} from 'appConfig.json';

const CountrySettingView = ({Delete_Country,country,deletedData}) => {
    
    const [tableView, setTableView] = useState(true);
    const [dataView, setDataView] = useState({});
    const [showDelete, setshowDelete] = useState(false);
    const [dataDelete, setDataDelete] = useState({});
    const columns = [
        
        {
            title: 'CountryName',
            dataIndex: 'country_name',
            key: 'country_name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text) => {
                return (
                    <Space size="middle">
                        
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
        setDataDelete(data.country_id)
    }
    const onViewPanel = data => {
        setTableView(false)
        setDataView(data)
    }

    const deleteFile = () => {
        setshowDelete(false)
        Delete_Country(dataDelete)
       
    }
    const onCancelDelete = () =>{
        setshowDelete(false)
    }

    return (
        <>
            {tableView ? <Table className="gx-table-responsive" columns={columns} dataSource={country} pagination={{ pageSize: Pagination }}
                scroll={{ y: 240 }} /> : (
                    <>
                        <div className="gx-module-box-topbar">
                            <Row justify="space-between">

                                <Col>
                                    <Tooltip title="Back List View">
                                        <span className=" gx-btn-block gx-text-primary gx-pointer">
                                            <i className="icon icon-reply gx-fs-xl gx-mr-2" />
                                        </span>
                                    </Tooltip>
                                </Col>
                            </Row>
                        </div>
                        <div>CountryName:{dataView.country_name}</div>
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

export default CountrySettingView