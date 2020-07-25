import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddUser = async (filter, callback) => {
    return API.post('/AddUser', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddUser');
        });
};

let UpdateUser = async (filter, callback) => {
    return API.post('/UpdateUser', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateUser');
        });
};

let DeleteUser = async (filter, callback) => {
    return API.post('/DeleteUser', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteUser');
        });
};

let GetUser = async (filter, callback) => {
    return API.post('/GetUser', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetUser');
        });
};

let GetUsers = async (filter, callback) => {
    return API.post('/GetUsers', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetUsers');
        });
};

let UserLookUp = async (filter, callback) => {
    return API.post('/UserLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UserLookUp');
        });
};

export { AddUser,
    UpdateUser,
    DeleteUser,
    GetUser,
    GetUsers,
    ChangePassword };