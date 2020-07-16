var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'schemes';
const _primaryKey = 'scheme_id';

//#region

exports.GetSchemeById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllSchemes = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddScheme = async (scheme, callback) => {
    return await Add(_tableName, scheme, callback);
}

exports.UpdateScheme = async (key, scheme, callback) => { 
    return await Update(_tableName, _primaryKey, key, scheme, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion