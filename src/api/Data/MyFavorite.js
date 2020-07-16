var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'myfavorites';
const _primaryKey = 'myfavorite_id';

//#region

exports.GetMyfavoriteById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllMyfavorites = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddMyfavorite = async (myfavorite, callback) => {
    return await Add(_tableName, myfavorite, callback);
}

exports.UpdateMyfavorite = async (key, myfavorite, callback) => { 
    return await Update(_tableName, _primaryKey, key, myfavorite, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion