import React from 'react';
import { Divider, Input, Badge, Card, Avatar, Statistic, Row, Col, Button } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, InsertRowBelowOutlined, PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import 'instantsearch.css/themes/algolia.css';

const PageHeaderWithBack = ({ title, subtitle, isadd, islist }) =>
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

          {islist ?  <InsertRowBelowOutlined style={{
                position: 'absolute',
                top: '30px',
                right: '35px',
                fontSize: '40px',
                color: 'blue'
            }} /> : null}

        </Divider>
    </div>;

export default PageHeaderWithBack;