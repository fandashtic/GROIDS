import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col, Input, Tooltip } from 'antd';
import Details from './details';
import Table from './table';
import Form from './form';
import PageHeaderWithBack from 'components/PageHeaderWithBack';
import { InsertRowBelowOutlined } from '@ant-design/icons';
const Search = Input.Search;

const Index = ({ match }) => {
  return (
    // <>
    // <PageHeaderWithBack title="Products" subtitle="Product" islist={true} isadd={false} />
    //   <Row justify="end">
    //     <Col span={12}><h2>Products</h2></Col>
    //     <Col span={12}>
    //       <Search placeholder="What you like..."
    //         style={{
    //           height: "36px"
    //         }}
    //         enterButton="Search Product" size="medium" />
    //     </Col>
    //   </Row>
    //   <Row justify="end" gutter={12}>
    //     <Col span={1}>
    //       <Tooltip placement="topLeft" title="Table View">
    //         <i className="icon icon-table" style={{
    //           fontSize: '20px',
    //           color: '#545454',
    //           position: 'relative',
    //           top: '2px'
    //         }} />
    //       </Tooltip>
    //     </Col>
    //     <Col span={1}>
    //       <Tooltip placement="topLeft" title="Card View">
    //         <i className="icon icon-card" style={{
    //           fontSize: '25px',
    //           color: '#545454'
    //         }} />
    //       </Tooltip>
    //     </Col>
    //   </Row>
    //   <Row className="gx-main-content-wrapper">
    //     <Col span={24}>
          <Switch>
            <Route exact path={`${match.url}`} component={Table} />
            <Route exact path={`${match.url}/add`} component={Form} />
            <Route exact path={`${match.url}/edit/:id`} component={Form} />
            <Route exact path={`${match.url}/view/:id`} component={Details} />
          </Switch>
    //     </Col>
    //   </Row>
    
    // </>
  )
};

export default Index;