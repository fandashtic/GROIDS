var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'deliveries';
const _primaryKey = 'delivery_id';

//#region

exports.GetDeliveryById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllDeliveries = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddDelivery = async (delivery, callback) => {
    return await Add(_tableName, delivery, callback);
}

exports.UpdateDelivery = async (key, delivery, callback) => { 
    return await Update(_tableName, _primaryKey, key, delivery, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion