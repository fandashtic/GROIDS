var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'paymentTypes';
const _primaryKey = 'paymentType_id';

//#region

exports.GetPaymentTypeById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllPaymentTypes = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddPaymentType = async (paymentType, callback) => {
    return await Add(_tableName, paymentType, callback);
}

exports.UpdatePaymentType = async (key, paymentType, callback) => { 
    return await Update(_tableName, _primaryKey, key, paymentType, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion