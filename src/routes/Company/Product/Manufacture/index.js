import React, { useState, useEffect } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetManufactures, DeleteManufacture, AddManufacture } from 'api/Shared/Master/ManufactureController'

const filter = { status: true }
function Manufacture() {
    const [view, setView] = useState(true);
    const [manufactures, setManufactures] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);

    const viewChanged = () => {
        setView(!view)
    }


    const apiInit = () => {
        GetManufactures(filter, (res, err) => {
            setManufactures(res.data)
            setsearchItem(res.data)
        })
    }

    useEffect(() => {
        apiInit()
    }, [view]);

    // const editableData = (data) => {
    //     setView(false)
    //     setEditData(data)
    // }

    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = manufactures.filter((el) => el.manufacture_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }


    const deletedData = (id) => {
        DeleteManufacture(id, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Deleted");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }
    const addData = data => {
        AddManufacture(data, (res, err) => {
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
                <Row gutter={16} style={{width: "100%"}}>
                    <Col md={20} sm={19}>
                        <></>
                        {view && <AppModuleHeader placeholder="Search Manufacture" value={searchValue} onChange={handleChange} />}
                    </Col>
                    <Col md={4} sm={5}>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />&nbsp;
                                    <span>Add New</span></>) : (
                                    <>
                                        <i className="icon icon-all-contacts gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                        <span>View All</span></>)
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
            {view ? (<ListView manufactures={searchItem} deletedData={deletedData} />) : <ListForm addData ={addData} />}

        </div>
    )
}

export default Manufacture
