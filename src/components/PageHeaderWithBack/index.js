import React from 'react';
import { Badge, Row, Col, Tooltip } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, InsertRowBelowOutlined, PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, AppstoreAddOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import 'instantsearch.css/themes/algolia.css';
import { useHistory } from "react-router-dom";
const PageHeaderWithBack = ({ title, subtitle, rooticon }) => {
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <>
            <Row justify="end" className="topNavbar" align="middle" style={{ margin: "0px" }}>
                <Col span={24}>
                    <h2 style={{ marginBottom: '4px' }}>
                        <Tooltip placement="topLeft" title="Back">
                            <span style={{marginRight: '5px'}}>
                            {rooticon ? rooticon :
                                <ArrowLeftOutlined className="gx-mr-2"
                                onClick={goToPreviousPath}
                                    style=
                                    {{ position: "absolute", left: "-10px", top: "2px", color: "#545454", cursor: "pointer" }}
                                />                                
                            }
                            </span>
                        </Tooltip>
                        {title}
                    </h2>
                    <Badge className='ant-badge' style={{ backgroundColor: '#34b880' }} count={subtitle}>
                    </Badge>
                </Col>
            </Row>
        </>)
}

export default PageHeaderWithBack;