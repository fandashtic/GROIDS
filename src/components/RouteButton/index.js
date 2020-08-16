import React from 'react'
import { useHistory } from "react-router-dom";
import { Button, Row, Col, Tooltip, Menu, Dropdown, Input } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, InsertRowBelowOutlined, PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, AppstoreAddOutlined, ImportOutlined, UploadOutlined, MoreOutlined, DownloadOutlined } from '@ant-design/icons';
const Search = Input.Search;
const AddButton = () => {
    const history = useHistory()
    let pathname = history.location.pathname; 

    const handleClick = () => {
        history.push(`${pathname}/add`)
    }

    const menu = (
        <Menu>
          <Menu.Item key="0" icon={<AppstoreAddOutlined />} onClick={handleClick}>
            Add Item
          </Menu.Item>
          <Menu.Item key="1" icon={<UploadOutlined />}>
            Import Data
          </Menu.Item>
          <Menu.Item key="2" icon={<DownloadOutlined />}>
            Download Template
          </Menu.Item>
        </Menu>
      );
    return  (
        <>
            <Row className="tableActions" justify="end" gutter={12}>
                {/* <Col>
                    <Button ghost size="small" icon={<UploadOutlined />}>Import</Button>
                </Col>
                <Col>
                    <Button ghost size="small" icon={<AppstoreAddOutlined />} onClick={handleClick}>Add</Button>
                </Col> */}
                {/* <Col>
                    <Search placeholder="Search" size="medium" />
                </Col> */}
                <Col>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a href className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <MoreOutlined style={{ fontSize: "20px" }} />
                        </a>
                    </Dropdown>
                </Col>
            </Row>            
        </>
    )
}

const ViewButton = ({id}) => {
    const history = useHistory()
    let pathname = history.location.pathname; 

    const handleClick = () => {
        history.push(`${pathname}/view/${id}`)
    }
    return  (
        <>
            <Button type="primary" icon={<PlusSquareOutlined  />} onClick={handleClick}>View</Button>
        </>
    )
}

const EditButton = ({id}) => {
    const history = useHistory()
    let pathname = history.location.pathname; 

    const handleClick = () => {
        history.push(`${pathname}/edit/${id}`)
    }
    return  (
        <>
            <Button icon={<PlusSquareOutlined  />}  name="Edit" onClick={handleClick}>Edit</Button>
        </>
    )
}

export {AddButton,ViewButton,EditButton}