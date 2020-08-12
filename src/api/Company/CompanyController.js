import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject, IsHasValue } from 'api/Shared/Util';

let AddCompany = async (data, callback) => {
    return API.post('/AddCompany', PostObject(data))
        .then(function (response) {
            return  ReturnObject(callback, null, response, 'AddCompany');
        })
        .catch(function (error) {
            return  ReturnObject(callback, error, null, 'AddCompany');
        });
};

let UpdateCompany = async (id, data, callback) => {
    return API.post('/UpdateCompany', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdateCompany');
        })
        .catch(function (error) {
            return  ReturnObject(callback, error, null, 'UpdateCompany');
        });
};

let DeleteCompany = async (id, callback) => {
    return API.post('/DeleteCompany', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeleteCompany');
        })
        .catch(function (error) {
            return  ReturnObject(callback, error, null, 'DeleteCompany');
        });
};

let GetCompany = async (id, callback) => {
    return API.post('/GetCompany', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCompany');
        })
        .catch(function (error) {
            return  ReturnObject(callback, error, null, 'GetCompany');
        });
};

let GetCompanies = async (filter, callback) => {
    return API.post('/GetCompanies', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetCompanies');
        })
        .catch(function (error) {
            return  ReturnObject(callback, error, null, 'GetCompanies');
        });
};

let CompanyLookUp = async (id, callback) => {
    return API.post('/CompanyLookUp', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'CompanyLookUp');
        })
        .catch(function (error) {
            return  ReturnObject(callback, error, null, 'CompanyLookUp');
        });
};

let ImportCompany = async (data, callback) => {
    if(IsHasValue(data) && data.length > 0){
        data.forEach(obj => {
            AddCompany(obj, callback);
        });        
    }
};

export { AddCompany,
    UpdateCompany,
    DeleteCompany,
    GetCompany,
    GetCompanies,
    CompanyLookUp,
    ImportCompany };