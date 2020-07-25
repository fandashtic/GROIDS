import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddArea = async (filter, callback) => {
    return API.post('/AddArea', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddArea');
        });
};

let UpdateArea = async (filter, callback) => {
    return API.post('/UpdateArea', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateArea');
        });
};

let DeleteArea = async (filter, callback) => {
    return API.post('/DeleteArea', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteArea');
        });
};

let GetArea = async (filter, callback) => {
    return API.post('/GetArea', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetArea');
        });
};

let GetAreas = async (filter, callback) => {
    return API.post('/GetAreas', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetAreas');
        });
};

let AreaLookUp = async (filter, callback) => {
    return API.post('/AreaLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AreaLookUp');
        });
};

export { AddArea,
    UpdateArea,
    DeleteArea,
    GetArea,
    GetAreas,
    AreaLookUp };