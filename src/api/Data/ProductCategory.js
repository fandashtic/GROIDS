var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'productCategories';
const _primaryKey = 'productcategory_id';

//#region

exports.GetProductCategoryById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllProductCategories = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddProductCategory = async (productcategory, callback) => {
    return await Add(_tableName, productcategory, callback);
}

exports.UpdateProductCategory = async (key, productcategory, callback) => { 
    return await Update(_tableName, _primaryKey, key, productcategory, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion