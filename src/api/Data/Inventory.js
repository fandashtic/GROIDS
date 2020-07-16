var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'inventorys';
const _primaryKey = 'inventory_id';

//#region

exports.GetInventoryById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllInventorys = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddInventory = async (inventory, callback) => {
    return await Add(_tableName, inventory, callback);
}

exports.UpdateInventory = async (key, inventory, callback) => { 
    return await Update(_tableName, _primaryKey, key, inventory, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion