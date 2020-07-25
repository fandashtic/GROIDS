import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddState = async (filter, callback) => {
    return API.post('/AddState', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddState');
        });
};

let UpdateState = async (filter, callback) => {
    return API.post('/UpdateState', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateState');
        });
};

let DeleteState = async (filter, callback) => {
    return API.post('/DeleteState', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteState');
        });
};

let GetState = async (filter, callback) => {
    return API.post('/GetState', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetState');
        });
};

let GetStates = async (filter, callback) => {
    return API.post('/GetStates', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetStates');
        });
};

let StateLookUp = async (filter, callback) => {
    return API.post('/StateLookUp', filter)
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