import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddCompany = async (data, callback) => {
    return API.post('/AddCompany', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddCompany');
        });
};

let UpdateCompany = async (id, data, callback) => {
    return API.post('/UpdateCompany', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateCompany');
        });
};

let DeleteCompany = async (id, callback) => {
    return API.post('/DeleteCompany', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteCompany');
        });
};

let GetCompany = async (id, callback) => {
    return API.post('/GetCompany', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCompany');
        });
};

let GetCompanies = async (filter, callback) => {
    return API.post('/GetCompanies', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCompanies');
        });
};

let CompanyLookUp = async (filter, callback) => {
    return API.post('/CompanyLookUp', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'CompanyLookUp');
        });
};

export { AddCompany,
    UpdateCompany,
    DeleteCompany,
    GetCompany,
    GetCompanies,
    CompanyLookUp };