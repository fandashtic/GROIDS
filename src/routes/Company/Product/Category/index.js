import React, { useEffect,useState } from "react";
import AppModuleHeader from "components/AppModuleHeader/index";
import { Button, Row, Col,message } from "antd";
import ListView from './view';
import ListForm from './form';
import { GetProductCategories,DeleteProductCategory,AddProductCategory } from 'api/Shared/Master/ProductCategoryController'

let filter = { status: true }

const ProductCategory = () => {
    const [view, setView] = useState(true);
    const [editData, setEditData]= useState({})
    const [category, setCategory] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [searchItem, setsearchItem] = useState([]);

    const apiInit = () => {
        GetProductCategories(filter, (res, err) => {
            console.log(res.data)
            setCategory(res.data)
            setsearchItem(res.data)
        })
    }

    const addData = data => {
        AddProductCategory(data, (res, err) => {
            console.log(res)
            if (res.Status === 200) {
                message.success("Suceessfully Record Added");
                apiInit()
            } else {
                message.warning("Something went to wrong");
            }
        })
    }

    const viewChanged = () => {
        setView(!view)
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
        let dataList =  category.filter((el) =>el.product_category_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
        setsearchItem(dataList)
    }

    const deletedData = (id) =>{
        DeleteProductCategory(id,(res,err) => {
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
                        {view && <AppModuleHeader placeholder="Search Category" value={searchValue} onChange={handleChange} />}
                        </Col>
                        <Col md={6} sm={8}>
                            <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
                                {view ? (
                                    <><i className="icon icon-add gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                        <span>Add New Category</span></>) : (
                                        <>
                                            <i className="icon icon-eye gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
                                            <span>View Categories</span></>)
                                }
                            </Button>
                        </Col>
                    </Row>
                </div>
            {view ? (<ListView editableData={editableData} deletedData ={deletedData} category={searchItem}/>) : <ListForm  editableDataToForm ={editData} addData={addData}/>}

            </div>
        )
};

export default ProductCategory;