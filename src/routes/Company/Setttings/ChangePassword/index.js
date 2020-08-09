import React, { useEffect, useState } from "react";
import AppModuleHeader from "components/AppModuleHeader";
import { Button, Row, Col, message } from "antd"
import ChangePasswordForm from './form';
import { IsUserValid,ChangePassword} from 'api/Shared/Master/UserController'


function changePasswordSetting() {



const changePassword = async (user_id, new_password, old_password) =>{
    ChangePassword (user_id, new_password, old_password,(data,err)=>{
            console.log(data)
            if ( data.Status === 200) {
                message.success("Suceessfully Record Added");
               
            } else {
                console.log(err)
                message.warning("Something went to wrong");
            }     
    })


}


    return (
        <div className="gx-module-box-content">
        <ChangePasswordForm changePassword = {changePassword}/>
        </div>
    )

};


export default changePasswordSetting