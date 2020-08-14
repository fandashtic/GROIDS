import React from 'react'
import { useHistory } from "react-router-dom";
import {Button} from 'antd';
import { SmileTwoTone, HeartTwoTone, DeleteOutlined, LikeOutlined, ApartmentOutlined, InsertRowBelowOutlined, PlusSquareOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const AddButton = () => {
    const history = useHistory()
    let pathname = history.location.pathname; 

    const handleClick = () => {
        history.push(`${pathname}/add`)
    }
    return  (
        <>
            <Button icon={<PlusSquareOutlined  />} onClick={handleClick}>Add</Button>
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
            <Button icon={<PlusSquareOutlined  />}  name="View" onClick={handleClick}>View</Button>
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