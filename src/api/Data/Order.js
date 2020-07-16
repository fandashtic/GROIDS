var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'orders';
const _primaryKey = 'order_id';

//#region

exports.GetOrderById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllOrders = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddOrder = async (order, callback) => {
    return await Add(_tableName, order, callback);
}

exports.UpdateOrder = async (key, order, callback) => { 
    return await Update(_tableName, _primaryKey, key, order, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion