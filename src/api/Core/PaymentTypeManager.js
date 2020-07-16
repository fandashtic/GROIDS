var { GetAllPaymentTypes, GetPaymentTypeById, Add, Update, Delete } = require('./../Data/PaymentType');

exports.IsPaymentTypeValid = async (paymentTypeName, password, callback) => {
    return await GetPaymentTypeById(paymentTypeName, async (paymentType) => {
        if (paymentType.password === password) {
            return await callback({
                'data': {
                    PaymentTypeName: paymentType.paymentTypeName,
                    PaymentTypeDisplayName: paymentType.firstName + ' ' + paymentType.lastName,
                    PaymentTypeType: paymentType.paymentTypeType,
                    CompanyId: paymentType.companyId,
                    StoreId: paymentType.storeId,
                    PaymentTypeProfileImage: paymentType.profileImageUrl
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

exports.AddPaymentType = async (paymentType, callback) => {
    return await Add(paymentType, async (paymentType) => {
        if (paymentType) {
            return await callback({
                'data':paymentType,
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

exports.UpdatePaymentType = async (key, paymentType, callback) => { 
    return await Update(key, paymentType, async (paymentType) => {
        if (paymentType) {
            return await callback({
                'data':paymentType,
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

exports.DeletePaymentType = async (key, callback) =>
{
    return await Delete(key, async (paymentType) => {
        if (paymentType) {
            return await callback({
                'data':paymentType,
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

exports.GetPaymentType = async (paymentTypeName, callback) => {
    return await GetPaymentTypeById(paymentTypeName, async (paymentType) => {
        if (paymentType) {
            return await callback({
                'data':paymentType,
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

exports.GetAllPaymentTypes = async (filter, callback) => {
    return await GetAllPaymentTypes(filter, async (paymentTypes) => {
        if (paymentTypes) {
            return await callback({
                'data':paymentTypes,
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
