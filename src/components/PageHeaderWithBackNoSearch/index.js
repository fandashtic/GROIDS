import React from 'react';
import { Link } from "react-router-dom";
import { Divider, Input, Badge, Card, Avatar, Statistic, Row, Col, Button, Tooltip } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, InsertRowBelowOutlined, PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, AppstoreAddOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import 'instantsearch.css/themes/algolia.css';
import { useHistory } from "react-router-dom";

const Search = Input.Search;

const PageHeaderWithBackNoSearch = ({ title, subtitle, isadd, islist }) => {

    const history = useHistory()
    // let pathname = history.location.pathname
    // var arrVars = pathname.split("/");
    // arrVars.pop();
    // arrVars.pop();
    
    const goBack = () => {
        console.log('test')
        history.goBack()
    }

    return (
        <>
            <Row justify="start" className="topNavbar" align="middle" style={{margin: "0px"}}>
                <Col span={12}>
                        <h2 style={{marginBottom: '4px'}}><span onClick={()=> goBack()}> <Tooltip placement="topLeft" title="Back">
                            <ArrowLeftOutlined className="gx-mr-2"  style={{ position: "absolute", left: "-10px", top: "2px", color: "#545454", cursor: "pointer" }} />
                            </Tooltip></span>{title}</h2>
                        <Badge className='ant-badge' style={{ backgroundColor: '#34b880' }} count={subtitle}>
                        </Badge>
                </Col>
                {/* <Col span={12}>
                    <Search placeholder="What you like..."
                        style={{
                            height: "36px"
                        }}
                        enterButton="Search Product" size="medium" />
                </Col> */}
            </Row>
            {/* <h2 style={{position: "relative"}}>
            <Tooltip placement="topLeft" title="Back"><ArrowLeftOutlined className="gx-mr-2" style={{position: "absolute", left: "-25px", top: "2px", color: "#545454", cursor: "pointer"}} /></Tooltip>{title}
            </h2>
            <Badge className='ant-badge' style={{ backgroundColor: '#34b880' }} count={subtitle}>

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
            </Divider> */}
        </>)
}

export default PageHeaderWithBackNoSearch;