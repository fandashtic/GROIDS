import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, IsHasValue, ReturnObject } from 'api/Shared/Util';

let AddUser = async (data, callback) => {
    return API.post('/AddUser', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddUser');
        });
};

let UpdateUser = async (id, data, callback) => {
    return API.post('/UpdateUser', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateUser');
        });
};

let DeleteUser = async (id, callback) => {
    return API.post('/DeleteUser', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteUser');
        });
};

let GetUser = async (id, callback) => {
    return API.post('/GetUser', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetUser');
        });
};

let GetUsers = async (filter, callback) => {
    return API.post('/GetUsers', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetUsers');
        });
};

let UserLookUp = async (id, callback) => {
    return API.post('/UserLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UserLookUp');
        });
};

let ChangePassword = async (user_id, new_password, old_password, callback) => {
    let filter = {
        'user_id': user_id,
        'new_password': new_password,
        'old_password' : old_password
    };
    return API.post('/ChangePassword', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UserLookUp');
        });
};

let IsUserValid = async (user_name, password, callback) => {
    let filter = {
        "user_name": user_name,
        "password": password
    };

    return API.post('/IsUserValid', GetAllObject(filter))
        .then(res => {
            return ReturnObject(callback, null, res.data, 'IsUserValid');
        });
};

let ImportUser = async (data, callback) => {
    if(IsHasValue(data) && data.length > 0){
        data.forEach(obj => {
            AddUser(obj, callback);
        });        
    }
};

export { AddUser,
    UpdateUser,
    DeleteUser,
    GetUser,
    GetUsers,
    UserLookUp,
    IsUserValid,
    ChangePassword,
    ImportUser };