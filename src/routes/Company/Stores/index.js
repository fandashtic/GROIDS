// import React, { useEffect, useState } from "react";
// import AppModuleHeader from "components/AppModuleHeader/index";
// import { Row, Col, Button, Card, Divider, message } from 'antd'
// import ListView from './view'
// import FormView from './form'
// import { GetStores, DeleteStore, AddStore } from 'api/Shared/Master/StoreController';

// let filter = { status: true }

// const Index = () => {
//     const [view, setView] = useState(true);
//     const [stores, setStores] = useState([]);
//     const [searchValue, setSearchValue] = useState();
//     const [searchItem, setsearchItem] = useState([]);

//     const apiInit = () => {
//         GetStores(filter, (res, err) => {
//             setStores(res.data)
//             setsearchItem(res.data)
//         })
//     }

//     const viewChanged = () => {
//         setView(!view)
//     }
//     useEffect(() => {
//         apiInit()
//     }, [view])

//     const handleChange = (event) => {
//         event.persist();
//         setSearchValue(event.target.value)
//         let dataList = stores.filter((el) => el.store_name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
//         setsearchItem(dataList)
//     }

//     const deletedData = (id) => {
//         DeleteStore(id, (res, err) => {
//             if (res.Status === 200) {
//                 message.success("Suceessfully Record Deleted");
//                 apiInit()
//             } else {
//                 message.warning("Something went to wrong");
//             }
//         })
//     }
//     const addData = data => {
//         AddStore(data, (res, err) => {
//             if (res.Status === 200) {
//                 message.success("Suceessfully Record Added");
//                 apiInit()
//             } else {
//                 message.warning("Something went to wrong");
//             }
//         })
//     }
//     return (
//         <Card title="Stores">
//             <div className="components-table-demo-control-bar">
//                 <Row justify="space-between">
//                     <Col>
//                         <></>
//                         {view && <AppModuleHeader placeholder="Search Store" value={searchValue} onChange={handleChange} />}
//                     </Col >
//                     <Col>
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
//             <Divider></Divider><br></br>
//             {view ? <ListView stores={searchItem} deletedData={deletedData} /> : <FormView addData={addData} />}
//         </Card>
//     )


// }
// export default Index


import React from "react";
import { Route, Switch } from "react-router-dom";
import table from './table'
import form from './form'
import view from './details'
const Index = ({ match })=> {
    return (
        <Switch>
            <Route path={`${match.path}`} component={table} />
            <Route path={`${match.path}Add`} component={form} />
            <Route path={`${match.path}edit/:id`} component={form} />
            <Route path={`${match.path}view/:id`} component={view} />
        </Switch>
    )
}

export default Index

