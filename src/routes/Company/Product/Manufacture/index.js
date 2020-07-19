import React, { useState, useEffect } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetManufacturesAPI, DeleteManufactureAPI, AddManufactureAPI } from 'api/Controller/Shared/ManufactureController'

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
        GetManufacturesAPI(filter, (res, err) => {
            setManufactures(res.data)
            setsearchItem(res.data)
        })
    }

    useEffect(() => {
        apiInit()
    }, []);

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
        DeleteManufactureAPI(id, (res, err) => {
            if (res) {
                message.success("Suceessfully Record Deleted");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }
    const addData = data => {
        AddManufactureAPI(data, (res, err) => {
            if (res.status === 200) {
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
                <Row justify="space-between">
                    <Col>
                        <></>
                        {view && <AppModuleHeader placeholder="Search Manufacture" value={searchValue} onChange={handleChange} />}
                    </Col >
                    <Col>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                    <span>Add New Manufacture</span></>) : (
                                    <>
                                        <i className="icon icon-eye gx-mr-2" />
                                        <span>View Manufacture</span></>)
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
