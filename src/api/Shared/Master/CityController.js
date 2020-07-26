import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddCity = async (filter, callback) => {
    return API.post('/AddCity', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddCity');
        });
};

let UpdateCity = async (filter, callback) => {
    return API.post('/UpdateCity', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateCity');
        });
};

let DeleteCity = async (filter, callback) => {
    return API.post('/DeleteCity', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteCity');
        });
};

let GetCity = async (filter, callback) => {
    return API.post('/GetCity', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCity');
        });
};

let GetCities = async (filter, callback) => {
    return API.post('/GetCities', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCities');
        });
};

let CityLookUp = async (filter, callback) => {
    return API.post('/CityLookUp', filter)
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