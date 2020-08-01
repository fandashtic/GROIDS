import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddState = async (data, callback) => {
    return API.post('/AddState', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddState');
        });
};

let UpdateState = async (id, data, callback) => {
    return API.post('/UpdateState', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateState');
        });
};

let DeleteState = async (id, callback) => {
    return API.post('/DeleteState', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteState');
        });
};

let GetState = async (id, callback) => {
    return API.post('/GetState', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetState');
        });
};

let GetStates = async (filter, callback) => {
    return API.post('/GetStates', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetStates');
        });
};

let StateLookUp = async (filter, callback) => {
    return API.post('/StateLookUp', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'StateLookUp');
        });
};

export { AddState,
    UpdateState,
    DeleteState,
    GetState,
    GetStates,
    StateLookUp };