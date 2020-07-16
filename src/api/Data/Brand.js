var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'brands';
const _primaryKey = 'brand_id';

//#region

exports.GetBrandById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllBrands = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddBrand = async (brand, callback) => {
    return await Add(_tableName, brand, callback);
}

exports.UpdateBrand = async (key, brand, callback) => { 
    return await Update(_tableName, _primaryKey, key, brand, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion