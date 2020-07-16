var { GetAllPayments, GetPaymentById, Add, Update, Delete } = require('./../Data/Payment');

exports.IsPaymentValid = async (paymentName, password, callback) => {
    return await GetPaymentById(paymentName, async (payment) => {
        if (payment.password === password) {
            return await callback({
                'data': {
                    PaymentName: payment.paymentName,
                    PaymentDisplayName: payment.firstName + ' ' + payment.lastName,
                    PaymentType: payment.paymentType,
                    CompanyId: payment.companyId,
                    StoreId: payment.storeId,
                    PaymentProfileImage: payment.profileImageUrl
                },
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

exports.AddPayment = async (payment, callback) => {
    return await Add(payment, async (payment) => {
        if (payment) {
            return await callback({
                'data':payment,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

exports.UpdatePayment = async (key, payment, callback) => { 
    return await Update(key, payment, async (payment) => {
        if (payment) {
            return await callback({
                'data':payment,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

exports.DeletePayment = async (key, callback) =>
{
    return await Delete(key, async (payment) => {
        if (payment) {
            return await callback({
                'data':payment,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

exports.GetPayment = async (paymentName, callback) => {
    return await GetPaymentById(paymentName, async (payment) => {
        if (payment) {
            return await callback({
                'data':payment,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

exports.GetAllPayments = async (filter, callback) => {
    return await GetAllPayments(filter, async (payments) => {
        if (payments) {
            return await callback({
                'data':payments,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};
