// import React, { useEffect, useState } from "react";
// import AppModuleHeader from "components/AppModuleHeader/index";
// import { Button, Row, Col, message } from "antd";
// import ListView from './view';
// import ListForm from './form';
// import { GetBrands, DeleteBrand, AddBrand, BrandLookUp } from 'api/Shared/Master/BrandController';
// let filter = { status: true }
// let brand_id = null;

// function Brands() {
//     const [view, setView] = useState(true);
//     const [editData, setEditData] = useState({})
//     const [brands, setBrands] = useState([]);
//     const [searchValue, setSearchValue] = useState();
//     const [searchItem, setsearchItem] = useState([]);
//     const [LookUpData, setLookUpData] = useState({})

//     const viewChanged = () => {
//         setView(!view)
//     }
//     const apiInit = () => {
//         GetBrands(filter, (res, err) => {
//             setBrands(res.data)
//             setsearchItem(res.data)
//         })
//     }

//     const editableData = (data) => {
//         setView(false)
//         setEditData(data)
//     }

//     useEffect(() => {
//         apiInit()
//         BrandLookUp(brand_id, (data, err) => {
//             setLookUpData(data);
//         });
//     }, [])

//     const handleChange = (event) => {
//         event.persist();
//         setSearchValue(event.target.value)
//         let dataList = brands.filter((el) => el.brand_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
//         setsearchItem(dataList)
//     }

//     const deletedData = (id) => {
//         DeleteBrand(id, (res, err) => {
//             if (res.Status === 200) {
//                 message.success("Suceessfully Record Deleted");
//                 apiInit()
//             } else {
//                 message.warning("Something went to wrong");
//             }
//         })
//     }

//     const addData = data => {
//         AddBrand(data, (res, err) => {
//             if (res.Status === 200) {
//                 message.success("Suceessfully Record Added");
//                 apiInit()
//             } else {
//                 message.warning("Something went to wrong");
//             }
//         })
//     }

//     return (
//         <div className="gx-module-box-content">
//             <div className="gx-module-box-topbar">
//                 <Row gutter={16} style={{ width: "100%" }}>
//                     <Col md={20} sm={19}>
//                         <></>
//                         {view && <AppModuleHeader placeholder="Search Brands" value={searchValue} onChange={handleChange} />}
//                     </Col>
//                     <Col md={4} sm={5}>
//                         <Button className="gx-btn-block ant-btn" type="primary" aria-label="add" onClick={viewChanged}>
//                             {view ? (
//                                 <><i className="icon icon-add-circle gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
//                                     <span>Add New</span></>) : (
//                                     <>
//                                         <i className="icon icon-all-contacts gx-mr-2 gx-fs-lg gx-d-inline-flex gx-vertical-align-middle" />
//                                         <span>View All</span></>)
//                             }
//                         </Button>
//                     </Col>
//                 </Row>
//             </div>
//             {view ? (<ListView editableData={editableData} deletedData={deletedData} brands={searchItem} />) : <ListForm editableDataToForm={editData} addData={addData} LookUpData={LookUpData} />}


//         </div>
//     )
// };

// export default Brands

import React from "react";
import { Route, Switch } from "react-router-dom";
import Brand from './table'
import Form from './form'
import ViewData from './details'

const Index = ({ match }) => {
  return (      
    <Switch>
      <Route exact path={`${match.url}`} component={Brand} />
      <Route exact path={`${match.url}/add`} component={Form} />
      <Route exact path={`${match.path}/edit/:id`} component={Form} />
      <Route exact path={`${match.path}/view/:id`} component={ViewData} />
    </Switch>
  )
};

export default Index;