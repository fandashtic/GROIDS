import React from 'react';
import { Divider, Input, Badge, Card, Avatar, Statistic, Row, Col, Button, Tooltip } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, InsertRowBelowOutlined, PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, AppstoreAddOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import 'instantsearch.css/themes/algolia.css';
import { useHistory } from "react-router-dom";
const PageHeaderWithBack = ({ title, subtitle, isadd, islist }) => {
    const history = useHistory()
    let pathname = history.location.pathname
    var arrVars = pathname.split("/");
    arrVars.pop();
    arrVars.pop();
    var restVar = arrVars.join("/");
    console.log(restVar);

    return (
        <div>
            <h2 style={{position: "relative"}}>
            <Tooltip placement="topLeft" title="Back"><ArrowLeftOutlined className="gx-mr-2" style={{position: "absolute", left: "-25px", top: "2px", color: "#545454", cursor: "pointer"}} /></Tooltip>{title}
            </h2>
            <Badge className='ant-badge' style={{ backgroundColor: '#34b880' }} count={subtitle}>

            </Badge>
            <Divider orientation="left" plain>

                {isadd ?
                    <Tooltip placement="topLeft" title="Add item"><AppstoreAddOutlined style={{
                        position: 'absolute',
                        top: '30px',
                        right: '35px',
                        fontSize: '30px',
                        color: '#545454'
                    }} /></Tooltip> : null}

                {islist ?
                    <span onClick={() => history.push(`${restVar}`)}>
                        <InsertRowBelowOutlined style={{
                            position: 'absolute',
                            top: '30px',
                            right: '35px',
                            fontSize: '30px',
                            color: '#545454'
                        }} />
                    </span> : null}

            </Divider>
        </div>)
}

export default PageHeaderWithBack;