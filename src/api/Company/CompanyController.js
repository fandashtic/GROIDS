import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddCompany = async (filter, callback) => {
    return API.post('/AddCompany', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddCompany');
        });
};

let UpdateCompany = async (filter, callback) => {
    return API.post('/UpdateCompany', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateCompany');
        });
};

let DeleteCompany = async (filter, callback) => {
    return API.post('/DeleteCompany', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteCompany');
        });
};

let GetCompany = async (filter, callback) => {
    return API.post('/GetCompany', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCompany');
        });
};

let GetCompanies = async (filter, callback) => {
    return API.post('/GetCompanies', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCompanies');
        });
};

let CompanyLookUp = async (filter, callback) => {
    return API.post('/CompanyLookUp', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'CompanyLookUp');
        });
};

export { AddCompany,
    UpdateCompany,
    DeleteCompany,
    GetCompany,
    GetCompanies };