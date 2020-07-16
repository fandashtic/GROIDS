var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'carts';
const _primaryKey = 'cart_id';

//#region

exports.GetCartById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllCarts = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddCart = async (cart, callback) => {
    return await Add(_tableName, cart, callback);
}

exports.UpdateCart = async (key, cart, callback) => { 
    return await Update(_tableName, _primaryKey, key, cart, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion