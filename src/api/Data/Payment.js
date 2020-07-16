var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'payments';
const _primaryKey = 'payment_id';

//#region

exports.GetPaymentById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllPayments = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddPayment = async (payment, callback) => {
    return await Add(_tableName, payment, callback);
}

exports.UpdatePayment = async (key, payment, callback) => { 
    return await Update(_tableName, _primaryKey, key, payment, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion