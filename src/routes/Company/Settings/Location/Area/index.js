import React, { useState ,useEffect} from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import AreaSettingView from './view';
import AreaSettingForm from './form';
import { AddArea, GetAreas, AreaLookUp,DeleteArea} from 'api/Shared/Master/AreaController'


let filter ={status:true} 
  let area_id = ""

function AreaSetting() {

    const [view, setView] = useState(true);
    const [editData, setEditData] = useState({})
    const [Area,setArea] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);
    const [areaLookUpData,setareaLookUpData] = useState({})
    const [deleteArea,setdeleteArea]=useState(false);
    


    const viewChanged = () => {
        setView(!view)
    }

    const apiInit = () => {
        GetAreas(filter, (res, err) => {
            setArea(res.data)
            setsearchItem(res.data)
        })
    }

   
    const Delete_Area =(area_id)=>{
        DeleteArea (area_id,(res,err)=>{        
        if (res.Status === 200){
            message.success("Suceessfully Record Deleted");
            setdeleteArea (true)
            apiInit();
        }
        })
    }

   const arealookUpInit = () => {
    AreaLookUp(area_id, (data, err) => {
        setareaLookUpData(data)
        apiInit();

    })
}


    useEffect(() => {
        apiInit();
        arealookUpInit();
       
    },[])
   
    // useEffect(() => {
    //     apiInit();
    //     console.log("deleteArea",deleteArea)
    // }, [filter])


    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = Area.filter((el) =>el && el.area_name &&  el.area_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }


    const addData = data => {
        AddArea(data, (res, err) => {
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
            {view ? (<AreaSettingView DeleteArea={Delete_Area}  Area={searchItem}/>) : <AreaSettingForm  addData={addData} editableDataToForm={editData} areaLookUpData = {areaLookUpData} />}
        </div>
    )
};



export default AreaSetting