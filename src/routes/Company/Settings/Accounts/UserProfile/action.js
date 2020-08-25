import {
    AddUser, GetUsers, UpdateUser,DeleteUser
} from 'api/Shared/Master/UserController'

export const Add_user = (data) =>{
    return AddUser (data,(res,err)=>{
        return {res:res,err:err}
    })
};

export const Get_User = (Data)=>{
    let filter = {status:true}
    return GetUsers(filter,(data,err)=>{
        return {res:data,err:err}
    })
}

export const update_user =(id,data)=>{
    return UpdateUser(id,data,(res,err)=>{
        return{res:res,err:err}
    })
}
export const Delete_user =(id)=>{
    return DeleteUser(id,(res,err)=>{
        return{res:res,err:err}
    })
}
