import React, { useState ,useEffect} from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import CitySettingView from './view';
import CitySettingForm from './form';
import { AddCity, GetCities,CityLookUp,DeleteCity } from 'api/Shared/Master/CityController'
import { StateLookUp } from 'api/Shared/Master/StateController';
import { CountryLookUp } from 'api/Shared/Master/CountryController';


  let city_id = ""
  
  let filter = { status: true }
function CitySetting() {
    
    
    const [view, setView] = useState(true);
    const [editData, setEditData] = useState({})
    const [Area, setArea] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);
    const [countryLookUpData, setcountryLookUpData] = useState({})
    const [stateLookUpData, setstateLookUpData] = useState({})
    const [cityLookUpData, setcityLookUpData] = useState({})
    const [deleteCity,setdeleteCity]=useState(false);

    const viewChanged = () => {
        setView(!view)
    }

    const apiInit = () => {
        GetCities(filter, (res, err) => {
            setArea(res.data)
            setsearchItem(res.data)
        })
    }
    const countryInit = () => {
        CountryLookUp(filter, (data, err) => {
            setcountryLookUpData(data)

        })
    }
    const citylookUpInit = () => {
        CityLookUp(city_id, (data, err) => {
            setcityLookUpData(data)

        })
    }

    const Delete_city =(city_id)=>{
        DeleteCity (city_id,(res,err)=>{
            console.log("ManiRes",res)
            console.log("ManiRes",err)
        if (res.Status === 200){
            message.success("Suceessfully Record Deleted");
            apiInit()
        }
        })
    }
    useEffect(() => {
        apiInit()
        countryInit()
        citylookUpInit()
    },[])

    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = Area.filter((el) =>el && el.city_name && el.city_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }


    const addData = data => {
        AddCity(data, (res, err) => {
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
            {view ? (<CitySettingView Delete_city={Delete_city}  City={searchItem}/>) : <CitySettingForm  addData={addData} editableDataToForm={editData} cityLookUpData ={cityLookUpData}/>}
        </div>
    )
};



export default CitySetting