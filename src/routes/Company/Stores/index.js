import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col, Input, Tooltip } from 'antd';
import table from './table';
import form from './form';
import view from './details';
import PageHeaderWithBack from 'components/PageHeaderWithBack';
const Index = ({ match })=> {
    return (
        <>
            <PageHeaderWithBack title="Stores" subtitle="Stores" islist={true} isadd={false} />
            <Row className="gx-main-content-wrapper">
                <Col span={24}>
                    <Switch>
                        <Route path={`${match.path}`} component={table} />
                        <Route path={`${match.path}Add`} component={form} />
                        <Route path={`${match.path}edit/:id`} component={form} />
                        <Route path={`${match.path}view/:id`} component={view} />
                    </Switch>
                </Col>
            </Row>
        </>
    )
}

export default Index

