import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddCountry = async (data, callback) => {
    return API.post('/AddCountry', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddCountry');
        });
};

let UpdateCountry = async (id, data, callback) => {
    return API.post('/UpdateCountry', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateCountry');
        });
};

let DeleteCountry = async (id, callback) => {
    return API.post('/DeleteCountry', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteCountry');
        });
};

let GetCountry = async (id, callback) => {
    return API.post('/GetCountry', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCountry');
        });
};

let GetCountries = async (filter, callback) => {
    return API.post('/GetCountries', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCountries');
        });
};

let CountryLookUp = async (filter, callback) => {
    return API.post('/CountryLookUp', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'CountryLookUp');
        });
};

export { AddCountry,
    UpdateCountry,
    DeleteCountry,
    GetCountry,
    GetCountries,
    CountryLookUp };