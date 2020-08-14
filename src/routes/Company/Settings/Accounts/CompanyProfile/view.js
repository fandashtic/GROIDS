import React, { useState } from 'react'
import { Table, Tooltip, Space, Row, Col } from "antd";
import {Pagination} from 'appConfig.json';
import SweetAlert from "react-bootstrap-sweetalert";
import IntlMessages from "util/IntlMessages";
import { GetProducts, DeleteProduct, AddProduct } from 'api/Shared/Master/ProductController'

const  CompanyProfileview = ({editableData,Profile,deletedData}) => {
    
    const [tableView, setTableView] = useState(true);
    const [dataView, setDataView] = useState({});
    const [showDelete, setshowDelete] = useState(false);
    const [dataDelete, setDataDelete] = useState({});
    const columns = [
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
            title: 'ContactPerson',
            dataIndex: 'contactperson',
            key: 'contactperson',
        },

        {
            title: 'MobileNo',
            dataIndex: 'mobilenumber',
            key: 'mobilenumber',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text) => {
                return (
                    <Space size="middle">
                        
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
        setTableView(false)
        setDataView(data)
    }
    const deleteData = data => {
        setshowDelete(true)
        setDataDelete(data)
    }

    const deleteFile = () => {
        setshowDelete(false)
        deletedData(dataDelete.product_category_id)
       
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
                                    <h2>Profile Data</h2>
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
                        <div>CompanyName: {dataView.company_name}</div>
                        <div>EmailId : {dataView.email_id}</div>
                        <div>contactperson: {dataView.contactperson}</div>
                        <div>mobilenumber :{dataView.mobilenumber}</div>
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

export default CompanyProfileview
