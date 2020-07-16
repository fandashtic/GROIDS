
var { GetAllPayments, AddPayment, UpdatePayment, DeletePayment } = require('./../Core/PaymentManager');

exports.AddPayment = async (payment, callback) => {
    return await AddPayment(payment, callback);
};

exports.UpdatePayment = async (paymentId, payment, callback) => {
    return await UpdatePayment(paymentId, payment, callback);
};

exports.DeletePayment = async (paymentId, callback) => {
    return await DeletePayment(paymentId, callback);
};

exports.GetPayments = async (filter, callback) => {
    return await GetAllPayments( filter, callback);
};