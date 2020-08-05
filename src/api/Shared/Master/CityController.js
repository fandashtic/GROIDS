import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddCity = async (data, callback) => {
    return API.post('/AddCity', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddCity');
        });
};

let UpdateCity = async (id, data, callback) => {
    return API.post('/UpdateCity', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateCity');
        });
};

let DeleteCity = async (id, callback) => {
    return API.post('/DeleteCity', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteCity');
        });
};

let GetCity = async (id, callback) => {
    return API.post('/GetCity', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCity');
        });
};

let GetCities = async (filter, callback) => {
    return API.post('/GetCities', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCities');
        });
};

let CityLookUp = async (id, callback) => {
    return API.post('/CityLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'CityLookUp');
        });
};

export { AddCity,
    UpdateCity,
    DeleteCity,
    GetCity,
    GetCities,
    CityLookUp };