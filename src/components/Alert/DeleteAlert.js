import React from 'react'
import SweetAlert from "react-bootstrap-sweetalert";
import IntlMessages from "util/IntlMessages";

const DeleteAlert = ({ show, deleteData }) => {

    const deleteFile = () => {
        this.setState({
            warning: false
        })
    };
    const   onCancelDelete = () => {
        this.setState({
            warning: false
        })
    };

    return (

        <SweetAlert show={show}
            showCancel
            confirmBtnText={<IntlMessages id="sweetAlerts.yesDeleteIt" />}
            confirmBtnBsStyle="danger"
            cancelBtnBsStyle="default"
            title={<IntlMessages id="sweetAlerts.areYouSure" />}
            onConfirm={deleteFile}
            onCancel={onCancelDelete}
        >
        </SweetAlert>
    )
}

export default DeleteAlert
