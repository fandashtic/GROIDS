var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'productFamilys';
const _primaryKey = 'productFamily_id';

//#region

exports.GetProductFamilyById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllProductFamilys = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddProductFamily = async (productFamily, callback) => {
    return await Add(_tableName, productFamily, callback);
}

exports.UpdateProductFamily = async (key, productFamily, callback) => { 
    return await Update(_tableName, _primaryKey, key, productFamily, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion