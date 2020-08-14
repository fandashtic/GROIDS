import React, { useState ,useEffect} from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import CountrySettingView from './view';
import CountrySettingForm from './form';
import { AddCountry, GetCountries,DeleteCountry } from 'api/Shared/Master/CountryController'


let country_id = "";
let filter = { status: true }

function CountrySetting() {
   
    const [view, setView] = useState(true);
    const [editData, setEditData] = useState({})
    const [country, setcountry] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);
    const [delete_countries,setdelete_countries]=useState(false)


    const viewChanged = () => {
        setView(!view)
    }

    const apiInit = () => {
        GetCountries(filter, (res, err) => {
            console.log("country",res.data)
            setcountry(res.data)
            setsearchItem(res.data)
        })
    }

    const Delete_Country =(country_id)=>{
        DeleteCountry (country_id,(res,err)=>{
        if (res.Status === 200){
            message.success("Suceessfully Record Deleted");
            //setdeleteArea (true)
            apiInit();
        }
        })
    }
    useEffect(() => {
        apiInit()
    },[])


    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = country.filter((el) => el&&el.country_name&& el.country_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }


    const addData = data => {
        AddCountry(data, (res, err) => {
            console.log("cdata",data)
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
            {view ? (<CountrySettingView Delete_Country={Delete_Country}  country={searchItem}/>) : <CountrySettingForm  addData={addData} editableDataToForm={editData} />}
        </div>
    )
};



export default CountrySetting