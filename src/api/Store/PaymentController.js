import API from 'api/api';
import { GetObject, GetAllObject, PostObject, PutObject, DeleteObject, DeCode, ReturnObject } from 'api/Shared/Util';

let AddPayment = async (data, callback) => {
    return API.post('/AddPayment', PostObject(data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddPayment');
        });
};

let UpdatePayment = async (id, data, callback) => {
    return API.post('/UpdatePayment', PutObject(id, data))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdatePayment');
        });
};

let DeletePayment = async (id, callback) => {
    return API.post('/DeletePayment', DeleteObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeletePayment');
        });
};

let GetPayment = async (id, callback) => {
    return API.post('/GetPayment', GetObject(id))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetPayment');
        });
};

let GetPayments = async (filter, callback) => {
    return API.post('/GetPayments', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetPayments');
        });
};

let PaymentLookUp = async (filter, callback) => {
    return API.post('/PaymentLookUp', GetAllObject(filter))
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'PaymentLookUp');
        });
};

export { AddPayment,
    UpdatePayment,
    DeletePayment,
    GetPayment,
    GetPayments,
    PaymentLookUp };