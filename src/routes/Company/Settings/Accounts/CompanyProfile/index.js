import React, { useEffect, useState } from "react";
import AppModuleHeader from "components/AppModuleHeader";
import { Button, Row, Col, message } from "antd";
import CompanyProfileform from './form';
import CompanyProfileview from './view';
import { GetCompanies,AddCompany ,DeleteCompany} from 'api/Company/CompanyController'


let filter = { status: true }

function CompanySetting() {
    const [view, setView] = useState(true);
    const [editData, setEditData] = useState({})
    const [Profile, setProfile] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);
    
    
    const viewChanged = () => {
        setView(!view)
    }
    const apiInit = () => {
        GetCompanies(filter, (res, err) => {
        if (res && res !==undefined){
            console.log("res.data",res.data)
            setProfile(res.data)
            setsearchItem(res.data)
        }else {
            message.warning("Something went to wrong");
        }         
        })
     }
    
    useEffect(() => {
        apiInit()
    }, [])

    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = Profile.filter((el) => el && el.company_name&& el.company_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }

    const deletedData = (id) => {
        DeleteCompany(id, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Deleted");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }
    const addData = (data) => {
        AddCompany(data, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Added");
                apiInit()
            } else {
                console.log(err)
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
                        {view && <AppModuleHeader placeholder="Search Products" value={searchValue} onChange={handleChange} />}
                    </Col>
                    <Col md={4} sm={5}>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            
                            {/* {view ? { (
                                <><i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                    <span>&nbsp;Add New</span></>) : (}
                                    <>
                                        <i className="icon icon-all-contacts gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                        <span>View All</span></>)
                            } */}
                        </Button>
                    </Col>
                </Row>
            </div>
            {view ? <CompanyProfileview   deletedData={deletedData} Profile={searchItem}  /> : <CompanyProfileform addData={addData} />}
        </div>
    )
};

export default CompanySetting