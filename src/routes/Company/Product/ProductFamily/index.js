// import React, { useEffect,useState } from "react";
// import AppModuleHeader from "components/AppModuleHeader/index";
// import { Button, Row, Col,message } from "antd";
// import ListView from './view';
// import ListForm from './form';
// import { GetProductFamilies ,DeleteProductFamily,AddProductFamily} from 'api/Shared/Master/ProductFamilyController'

// let filter = { status: true }

// function Index() {
//     const [view, setView] = useState(true);
//     const [editData, setEditData]= useState({})
//     const [family, setFamily] = useState([]);
//     const [searchValue, setSearchValue] = useState();
//     const [searchItem, setsearchItem] = useState([]);

//     const viewChanged = () => {
//         setView(!view)
//     }
//     const editableData = (data) => {
//         setView(false)
//         setEditData(data)
//     }
//     const apiInit = () => {
//         GetProductFamilies(filter, (res, err) => {
//             setFamily(res.data)
//             setsearchItem(res.data)
//         })
//     }

//     const addData = data => {
//         AddProductFamily(data, (res, err) => {
//             if (res.Status === 200) {
//                 message.success("Suceessfully Record Added");
//                 apiInit()
//             } else {
//                 message.warning("Something went to wrong");
//             }
//         })
//     }

//     useEffect(() => {
//         apiInit()
//     }, [])

//     const handleChange = (event) => { 
//         event.persist();
//         setSearchValue(event.target.value)
//         let dataList =  family.filter((el) =>el.product_family_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
//         setsearchItem(dataList)
//     }
//     const deletedData = (id) =>{
//         DeleteProductFamily(id,(res,err) => {
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
//                         {view && <AppModuleHeader placeholder="Search Family" value={searchValue} onChange={handleChange} />}
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
//             {view ? (<ListView editableData={editableData} deletedData={deletedData} family={searchItem}/>) : <ListForm  addData ={addData} editableDataToForm ={editData}/>}

//             </div>
//         )
// };

// export default Index

import React from "react";
import { Route, Switch } from "react-router-dom";
import View from './table'
import Form from './form'

const Index = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={View} />
      <Route exact path={`${match.url}/add`} component={Form} />
      <Route exact path={`${match.url}/edit/:id`} component={Form} />
      <Route exact path={`${match.url}/view/:id`} component={Form} />
    </Switch>
  )
};

export default Index;