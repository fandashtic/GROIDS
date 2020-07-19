import React, { useEffect,useState } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col,message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetProductFamiliesAPI ,DeleteProductFamilyAPI} from 'api/Controller/Shared/ProductFamilyController'

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
        GetProductFamiliesAPI(filter, (res, err) => {
            setFamily(res.data)
            setsearchItem(res.data)
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
        DeleteProductFamilyAPI(id,(res,err) => {
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
                <Row justify="space-between">
                    <Col>
                        <></>
                        {view && <AppModuleHeader placeholder="Search Family" value={searchValue} onChange={handleChange} />}
                    </Col >
                    <Col>
                        <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                            {view ? (
                                <><i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                    <span>Add New Family</span></>) : (
                                    <>
                                        <i className="icon icon-eye gx-mr-2" />
                                        <span>View Family</span></>)
                            }
                        </Button>
                    </Col>
                </Row>
            </div>
            {view ? (<ListView editableData={editableData} deletedData={deletedData} family={searchItem}/>) : <ListForm  editableDataToForm ={editData}/>}

        </div>
    )
}

export default Index