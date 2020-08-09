import React from 'react';
import { Divider, Input, Badge, Card, Avatar, Statistic, Row, Col, Button } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, InsertRowBelowOutlined, PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
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
            <h2>
                {title}
            </h2>
            <Badge className='ant-badge' style={{ backgroundColor: '#52c41a' }} count={subtitle}>

            </Badge>
            <Divider orientation="left" plain>

                {isadd ?
                    <PlusSquareOutlined style={{
                        position: 'absolute',
                        top: '30px',
                        right: '35px',
                        fontSize: '40px',
                        color: 'green'
                    }} /> : null}

                {islist ?
                    <span onClick={() => history.push(`${restVar}`)}>
                        <InsertRowBelowOutlined style={{
                            position: 'absolute',
                            top: '30px',
                            right: '35px',
                            fontSize: '40px',
                            color: 'blue'
                        }} />
                    </span> : null}

            </Divider>
        </div>)
}

export default PageHeaderWithBack;