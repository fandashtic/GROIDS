import React, { useEffect, useState } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetBrandsAPI, DeleteBrandAPI, AddBrandAPI } from 'api/Controller/Shared/BrandController'

let filter = { status: true }

function Brands() {
    const [view, setView] = useState(true);
    const [editData, setEditData] = useState({})
    const [brands, setBrands] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);

    const viewChanged = () => {
        setView(!view)
    }

    const apiInit = () => {
        GetBrandsAPI(filter, (res, err) => {
            setBrands(res.data)
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
        let dataList = brands.filter((el) => el.brand_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }

    const deletedData = (id) => {
        DeleteBrandAPI(id, (res, err) => {
            if (res) {
                message.success("Suceessfully Record Deleted");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }
  const addData = data => {
        console.log(data)
        AddBrandAPI(data, (res, err) => {
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
                        {view && <AppModuleHeader placeholder="Search Brands" value={searchValue} onChange={handleChange} />}
                    </Col >
                    <Col>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                    <span>Add New Brands</span></>) : (
                                    <>
                                        <i className="icon icon-eye gx-mr-2" />
                                        <span>View Brands</span></>)
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
            {view ? (<ListView editableData={editableData} deletedData={deletedData} brands={searchItem} />) : <ListForm editableDataToForm={editData} addData={addData} />}

        </div>
    )
}

export default Brands