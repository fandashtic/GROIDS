import React, { useState ,useEffect} from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col, message } from "antd";
import StateSettingView from './view';
import StateSettingForm from './form';
import { AddState, GetStates,StateLookUp,DeleteState } from 'api/Shared/Master/StateController'



let state_id = "";
let filter = { status: true }

function StateSetting() {
    
    const [view, setView] = useState(true);
    const [editData, setEditData] = useState({})
    const [State, setState] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);
    const [StateLookUpdata, setStateLookUpdata] = useState({})


    const viewChanged = () => {
        setView(!view)
    }

    const apiInit = () => {
        GetStates(filter, (res, err) => {
            setState(res.data)
            setsearchItem(res.data)
        })
    }

    const statelookupdata= () => {
        console.log()
        StateLookUp(state_id, (data, err) => {
            console.log("Maniconuntry",data)
            setStateLookUpdata(data);
        });
    }


    const Delete_State =(state_id)=>{
        DeleteState (state_id,(res,err)=>{
        if (res.Status === 200){
            message.success("Suceessfully Record Deleted");
            apiInit()
        }
        })
    }
    useEffect(() => {
        apiInit()
        statelookupdata()
    },[])

       

    const handleChange = (event) => {
        event.persist();
        setSearchValue(event.target.value)
        let dataList = State.filter((el) =>el&&el.state_name&&el.state_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }


    const addData = data => {
        AddState(data, (res, err) => {
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
            {view ? (<StateSettingView Delete_State={Delete_State}  State={searchItem}/>) : <StateSettingForm  addData={addData} editableDataToForm={editData} StateLookUpdata={StateLookUpdata} />}
        </div>
    )
};



export default StateSetting