// import React, { useEffect,useState } from "react";
// import AppModuleHeader from "components/AppModuleHeader/index";
// import { Button, Row, Col,message } from "antd";
// import ListView from './view';
// import ListForm from './form';
// import { GetProductCategories,DeleteProductCategory,AddProductCategory ,ProductCategoryLookUp} from 'api/Shared/Master/ProductCategoryController'

// let filter = { status: true }
// let category_id = "PC020e0c876-b81e-4ba8-a0c6-3e27671771e8"
// const ProductCategory = () => {
//     const [view, setView] = useState(true);
//     const [editData, setEditData]= useState({})
//     const [category, setCategory] = useState([]);
//     const [searchValue, setSearchValue] = useState();
//     const [searchItem, setsearchItem] = useState([]);
//     const [LookUpData, setLookUpData] = useState({})

//     const apiInit = () => {
//         GetProductCategories(filter, (res, err) => {
//             setCategory(res.data)
//             setsearchItem(res.data)
//         })
//         ProductCategoryLookUp(category_id, (res,err) => {
//             setLookUpData(res)
//         })
//     }

//     const addData = data => {
//         AddProductCategory(data, (res, err) => {
//             console.log(res)
//             if (res.Status === 200) {
//                 message.success("Suceessfully Record Added");
//                 apiInit()
//             } else {
//                 message.warning("Something went to wrong");
//             }
//         })
//     }

//     const viewChanged = () => {
//         setView(!view)
//     }

//     const editableData = (data) => {
//         setView(false)
//         setEditData(data)
//     }
//     useEffect(() => {
//         apiInit()
//     }, [])

//     const handleChange = (event) => { 
//         event.persist();
//         setSearchValue(event.target.value)
//         let dataList =  category.filter((el) =>el.product_category_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
//         setsearchItem(dataList)
//     }

//     const deletedData = (id) =>{
//         DeleteProductCategory(id,(res,err) => {
//            if(res){
//                message.success("Suceessfully Record Deleted");
//                apiInit()
//            }else {
//                message.warning("Something went to wrong");
//            }
//        } )
//    }

//         return (
//             <div className="gx-module-box-content">
//                 <div className="gx-module-box-topbar">
//                     <Row gutter={16} style={{width: "100%"}}>
//                         <Col md={20} sm={19}>
//                             <></>
//                         {view && <AppModuleHeader placeholder="Search Category" value={searchValue} onChange={handleChange} />}
//                         </Col>
//                         <Col md={4} sm={5}>
//                             <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
//                                 {view ? (
//                                     <><i className="icon icon-add-circle gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
//                                         <span>Add New</span></>) : (
//                                         <>
//                                             <i className="icon icon-all-contacts gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
//                                             <span>View All</span></>)
//                                 }
//                             </Button>
//                         </Col>
//                     </Row>
//                 </div>
//             {view ? (<ListView editableData={editableData} deletedData ={deletedData} category={searchItem}/>) : <ListForm  editableDataToForm ={editData} addData={addData} LookUpData ={LookUpData}/>}

//             </div>
//         )
// };

// export default ProductCategory;


import React from "react";
import { Route, Switch } from "react-router-dom";
import Table from './table'
import Form from './form'
import View from './details'

const Index = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={Table} />
      <Route exact path={`${match.url}/add`} component={Form} />
      <Route exact path={`${match.url}/edit/:id`} component={Form} />
      <Route exact path={`${match.url}/view/:id`} component={View} />
    </Switch>
  )
};

export default Index;