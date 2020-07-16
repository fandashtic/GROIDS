var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'products';
const _primaryKey = 'product_id';

//#region

exports.GetProductById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllProducts = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddProduct = async (product, callback) => {
    return await Add(_tableName, product, callback);
}

exports.UpdateProduct = async (key, product, callback) => { 
    return await Update(_tableName, _primaryKey, key, product, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion