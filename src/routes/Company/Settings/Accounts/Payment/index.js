import React, { useState, useEffect } from "react";
import AppModuleHeader from "components/AppModuleHeader";
import { Button, Row, Col, message } from "antd";
import PaymentView from './view'
import PaymentForm from './form'
import {AddPayment,GetPayment,DeletePayment } from 'api/Store/PaymentController'
import {CompanyLookUp} from 'api/Company/CompanyController';
import {StoreLookUp} from 'api/Shared/Master/StoreController';

const filter = { status: true }
const payment_id = null
function PaymentSetting() {
    const [view, setView] = useState(true);
    const [editData, setEditData] = useState({})
    const [payments, setPayments] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);
    
    
    const viewChanged = () => {
        setView(!view)
    }

    const apiInit = () => {
        GetPayment(payment_id, (res, err) => {
            console.log(res)
            setPayments(res.data)
            setsearchItem(res.data)
        })
    }

    const editableData = (data) => {
        setView(false)
        setEditData(data)
    }

    useEffect(() => {
        apiInit()
    }, [])

    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = payments.filter((el) => el.payment_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }

    const deletedData = (payment_id) => {
        DeletePayment(payment_id, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Deleted");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }

    const addData = data => {
        AddPayment(data, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Added");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }
    return (
        <div className="gx-module-box-content">
            <div className="gx-module-box-topbar">
                <Row gutter={16} style={{ width: "100%" }}>
                <Col md={20} sm={19}>
                        <></>
                        {view && <AppModuleHeader placeholder="Search Brands" value={searchValue} onChange={handleChange} />}
                    </Col>
                    <Col md={4} sm={5}>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                    <span>&nbsp;Add New</span></>) : (
                                    <>
                                        <i className="icon icon-all-contacts gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                        <span>View All</span></>)
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
            {view ? (<PaymentView editableData={editableData} deletedData={deletedData} payments={searchItem} />) : <PaymentForm editableDataToForm={editData} addData={addData}  />}
        </div>
    )
};



export default PaymentSetting
