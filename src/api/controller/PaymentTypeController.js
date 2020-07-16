
var { GetAllPaymentTypes, AddPaymentType, UpdatePaymentType, DeletePaymentType } = require('./../Core/PaymentTypeManager');

exports.AddPaymentType = async (paymentType, callback) => {
    return await AddPaymentType(paymentType, callback);
};

exports.UpdatePaymentType = async (paymentTypeId, paymentType, callback) => {
    return await UpdatePaymentType(paymentTypeId, paymentType, callback);
};

exports.DeletePaymentType = async (paymentTypeId, callback) => {
    return await DeletePaymentType(paymentTypeId, callback);
};

exports.GetPaymentTypes = async (filter, callback) => {
    return await GetAllPaymentTypes( filter, callback);
};