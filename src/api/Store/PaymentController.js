import API from 'api/api';
import { DeCode, ReturnObject } from 'api/Shared/Util';

let AddPayment = async (filter, callback) => {
    return API.post('/AddPayment', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'AddPayment');
        });
};

let UpdatePayment = async (filter, callback) => {
    return API.post('/UpdatePayment', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'UpdatePayment');
        });
};

let DeletePayment = async (filter, callback) => {
    return API.post('/DeletePayment', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'DeletePayment');
        });
};

let GetPayment = async (filter, callback) => {
    return API.post('/GetPayment', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetPayment');
        });
};

let GetPayments = async (filter, callback) => {
    return API.post('/GetPayments', filter)
        .then(res => {
           return  ReturnObject(callback, null, res.data, 'GetPayments');
        });
};

let PaymentLookUp = async (filter, callback) => {
    return API.post('/PaymentLookUp', filter)
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