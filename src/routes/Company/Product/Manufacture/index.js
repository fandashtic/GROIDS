// import React, { useState, useEffect } from "react";
// import AppModuleHeader from "components/AppModuleHeader/index";
// import { Button, Row, Col, message } from "antd";
// import ListView from './view';
// import ListForm from './form';
// import DetailsView from './detailsView'
// import { GetManufactures, DeleteManufacture, AddManufacture } from 'api/Shared/Master/'

// const filter = { status: true }
// function Manufacture() {
//     const [view, setView] = useState(true);
//     const [manufactures, setManufactures] = useState([]);
//     const [searchValue, setSearchValue] = useState();
//     const [searchItem, setsearchItem] = useState([]);
//     const [id ,setID]= useState();
//     const[viewDetails,setViewDetails] = useState(true)

//     const viewChanged = () => {
//         setView(!view)
//     }


//     const apiInit = () => {
//         GetManufactures(filter, (res, err) => {
//             setManufactures(res.data)
//             setsearchItem(res.data)
//         })
//     }

//     useEffect(() => {
//         apiInit()
//     }, [view]);

//     // const editableData = (data) => {
//     //     setView(false)
//     //     setEditData(data)
//     // }

//     const handleChange = (event) => {
//         event.persist();
//         setSearchValue(event.target.value)
//         let dataList = manufactures.filter((el) => el.manufacture_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
//         setsearchItem(dataList)
//     }


//     const deletedData = (id) => {
//         DeleteManufacture(id, (res, err) => {
//             if (res.Status === 200) {
//                 message.success("Suceessfully Record Deleted");
//                 apiInit()
//             } else {
//                 message.warning("Something went to wrong");
//             }
//         })
//     }
//     const addData = data => {
//         AddManufacture(data, (res, err) => {
//             console.log(data)
//             if (res.Status === 200) {
//                 message.success("Suceessfully Record Added");
//                 apiInit()
//             } else {
//                 message.warning("Something went to wrong");
//             }
//         })
//     }
//     const viewData = id => {
//         setID(id)
//         setViewDetails(true)
//     }

//     return (
//         <>
//         {
//             !viewDetails ? 
//             <div className="gx-module-box-content">
//             <div className="gx-module-box-topbar">
//                 <Row gutter={16} style={{width: "100%"}}>
//                     <Col md={20} sm={19}>
//                         <></>
//                         {view && <AppModuleHeader placeholder="Search Manufacture" value={searchValue} onChange={handleChange} />}
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
//             {view ? (<ListView manufactures={searchItem} deletedData={deletedData} viewData ={viewData} />) : <ListForm addData ={addData} />}
            
//         </div>
//         :(
//                     <DetailsView dataId ={id} />
//         )
//         }
          
//         </>
      
//     )
// }

// export default Manufacture


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
      <Route  exact path={`${match.url}/view/:id`} component={Form} />
    </Switch>
  )
};

export default Index;