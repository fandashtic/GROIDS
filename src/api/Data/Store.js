var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'stores';
const _primaryKey = 'store_id';

//#region

exports.GetStoreById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllStores = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddStore = async (store, callback) => {
    return await Add(_tableName, store, callback);
}

exports.UpdateStore = async (key, store, callback) => { 
    return await Update(_tableName, _primaryKey, key, store, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion