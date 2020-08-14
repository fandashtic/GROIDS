
import React, { useState } from 'react'
import { Table, Tooltip, Space, Row, Col } from "antd";
import SweetAlert from "react-bootstrap-sweetalert";
import IntlMessages from "util/IntlMessages";
import {Pagination} from 'appConfig.json';

const CitySettingView = ({editableData,City,deletedData,Delete_city}) => {
    
    const [tableView, setTableView] = useState(true);
    const [dataView, setDataView] = useState({});
    const [showDelete, setshowDelete] = useState(false);
    const [dataDelete, setDataDelete] = useState({});
    const columns = [
        {
            title: 'City',
            dataIndex: 'city_name',
            key: 'city_name',
        },
        {
            title: 'State',
            dataIndex: 'state_name',
            key: 'state_name',
        },
        
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
        setDataDelete(data)
        setDataDelete(data.city_id)
    }
    
    const deleteFile = () => {
        setshowDelete(false)
    console.log (dataDelete)
    Delete_city(dataDelete) 
       
    }
    const onCancelDelete = () =>{
        setshowDelete(false)
    }

    return (
        <>
        {console.log(City)}
            {tableView ? <Table className="gx-table-responsive" columns={columns} dataSource={City} pagination={{ pageSize: Pagination }}
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
                <div>City_Name:{dataView.city_name}</div>
                <div>state_name:{dataView.state_name}</div>
                <div>country_name:{dataView.country_name}</div>
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

export default CitySettingView