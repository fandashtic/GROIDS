import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddCountry = async (filter, callback) => {
    return API.post('/AddCountry', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddCountry');
        });
};

let UpdateCountry = async (filter, callback) => {
    return API.post('/UpdateCountry', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateCountry');
        });
};

let DeleteCountry = async (filter, callback) => {
    return API.post('/DeleteCountry', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteCountry');
        });
};

let GetCountry = async (filter, callback) => {
    return API.post('/GetCountry', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCountry');
        });
};

let GetCountries = async (filter, callback) => {
    return API.post('/GetCountries', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCountries');
        });
};

let CountryLookUp = async (filter, callback) => {
    return API.post('/CountryLookUp', filter)
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