import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddArea = async (data, callback) => {
    return API.post('/AddArea', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddArea');
        });
};

let UpdateArea = async (id, data, callback) => {
    return API.post('/UpdateArea', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateArea');
        });
};

let DeleteArea = async (id, callback) => {
    return API.post('/DeleteArea', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteArea');
        });
};

let GetArea = async (id, callback) => {
    return API.post('/GetArea', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetArea');
        });
};

let GetAreas = async (filter, callback) => {
    return API.post('/GetAreas', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetAreas');
        });
};

let AreaLookUp = async (id, callback) => {
    return API.post('/AreaLookUp',GetObject(id))
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