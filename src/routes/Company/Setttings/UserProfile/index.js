import React, { useEffect, useState } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import UserProfileSettingView from './view';
import UserProfileSettingForm from './form';
import { AddUser, GetUsers } from 'api/Shared/Master/UserController'
import {CompanyLookUp} from 'api/Company/CompanyController';
import {StoreLookUp} from 'api/Shared/Master/StoreController';

let user_id = "";
const product_id ="";
let filter = { status: true }
function UserprofileSetting () {
    const [view, setView] = useState(true);
    const [editData, setEditData] = useState({})
    const [userprofile, setUserprofile] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);
    const [companyLookUpData,setcompanyLookUpData] = useState({});
    const [storeLookUpData,setstoreLookUpData] = useState({});
    
    
    const viewChanged = () => {
        setView(!view)
    }
    const apiInit = () => {
        GetUsers(user_id, (res, err) => {
            setUserprofile(res.data)
            setsearchItem(res.data)
        })
    }
    const editableData = (data) => {
        setView(false)
        setEditData(data)
    }

    const companyInit=()=>{
        CompanyLookUp (filter,(res,err)=>{
            console.log('companylookup',res)
            setcompanyLookUpData (res)
        })
        
    }
    const storeInit=()=>{
        StoreLookUp (filter,(res,err)=>{
            console.log('storelookup',res)
            setstoreLookUpData (res)
        })
        
    }
    useEffect(() => {
        apiInit();
        companyInit();
        storeInit();
    }, [])

    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = userprofile.filter((el) => el.user_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }
    const addData = data => {
        AddUser(data, (res, err) => {
            console.log(data)
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
            {view ? <UserProfileSettingView  editableData={editableData}  Profile={searchItem}  /> : <UserProfileSettingForm  editableDataToForm={editData}  addData={addData} storeLookUpData ={storeLookUpData} companyLookUpData ={companyLookUpData} />}
        </div>
    )
};

export default UserprofileSetting ;