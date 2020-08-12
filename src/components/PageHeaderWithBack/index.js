import React from 'react';
import { Link } from "react-router-dom";
import { Divider, Input, Badge, Card, Avatar, Statistic, Row, Col, Button, Tooltip } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, InsertRowBelowOutlined, PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, AppstoreAddOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import 'instantsearch.css/themes/algolia.css';
import { useHistory } from "react-router-dom";
const Search = Input.Search;

const PageHeaderWithBack = ({ title, subtitle, isForm, islist }) => {
    const history = useHistory()
    let pathname = history.location.pathname
    var arrVars = pathname.split("/");
    arrVars.pop();
    arrVars.pop();
    var restVar = arrVars.join("/");
    console.log(restVar);

    return (

        <div className='gx-layout-sider-header' style={{
            paddingLeft: '15px',
            fontSize: '30px'
        }}>
            <h2>
                <Link to="/" className="gx-site-logo">
                    <ArrowLeftOutlined
                        style={{
                            marginRight: '10px'
                        }} />
                    <span>
                        {title}
                    </span>
                </Link>
            </h2>
            <Badge className='ant-badge'
                style={{
                    backgroundColor: '#34b880',
                    position: 'relative',
                    top: '20px',
                    left: '-80px'
                }} count={subtitle}>
            </Badge>

            {islist ?
                <>
                    <Search placeholder="What you like..."
                        style={{
                            width: '50%',
                            position: 'absolute',
                            top: '18px',
                            left: '240px'
                        }}
                        enterButton="Search Product" size="medium" />


                    <Button type="primary" shape="circle" style={{
                        top: '7px'
                    }}>
                        New
                    </Button>
                </>
                : null}

        </div>
    )
}

export default PageHeaderWithBack;