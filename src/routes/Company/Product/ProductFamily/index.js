import React, { useEffect,useState } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col,message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetProductFamilies ,DeleteProductFamily,AddProductFamily} from 'api/Shared/Master/ProductFamilyController'

let filter = { status: true }

function Index() {
    const [view, setView] = useState(true);
    const [editData, setEditData]= useState({})
    const [family, setFamily] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);

    const viewChanged = () => {
        setView(!view)
    }
    const editableData = (data) => {
        setView(false)
        setEditData(data)
    }
    const apiInit = () => {
        GetProductFamilies(filter, (res, err) => {
            setFamily(res.data)
            setsearchItem(res.data)
        })
    }

    const addData = data => {
        AddProductFamily(data, (res, err) => {
            if (res.Status === 200) {
                message.success("Suceessfully Record Added");
                apiInit()
            } else {
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
        let dataList =  family.filter((el) =>el.product_family_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }
    const deletedData = (id) =>{
        DeleteProductFamily(id,(res,err) => {
           if(res){
               message.success("Suceessfully Record Deleted");
               apiInit()
           }else {
               message.warning("Something went to wrong");
           }
       } )
   }
   
        return (
            <div className="gx-module-box-content">
                <div className="gx-module-box-topbar">
                    <Row gutter={16} style={{width: "100%"}}>
                        <Col md={18} sm={16}>
                            <></>
                        {view && <AppModuleHeader placeholder="Search Family" value={searchValue} onChange={handleChange} />}
                    </Col>
                    <Col md={6} sm={8}>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                    <span>&nbsp;Add New Family</span></>) : (
                                    <>
                                        <i className="icon icon-eye gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                        <span>View Family</span></>)
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
            {view ? (<ListView editableData={editableData} deletedData={deletedData} family={searchItem}/>) : <ListForm  addData ={addData} editableDataToForm ={editData}/>}

            </div>
        )
};

export default Index