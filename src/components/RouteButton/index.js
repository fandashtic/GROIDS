import React from 'react'
import { useHistory } from "react-router-dom";
import { Button, Row, Col, Tooltip } from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, InsertRowBelowOutlined, PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, AppstoreAddOutlined, ImportOutlined } from '@ant-design/icons';
const AddButton = () => {
    const history = useHistory()
    let pathname = history.location.pathname; 

    const handleClick = () => {
        history.push(`${pathname}/add`)
    }
    return  (
        <>
            <Row className="tableActions" justify="end" gutter={12}>
                <Col>
                    <Button ghost size="small" icon={<ImportOutlined />}>Import</Button>
                </Col>
                <Col>
                    <Button ghost size="small" icon={<AppstoreAddOutlined />} onClick={handleClick}>Add</Button>
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