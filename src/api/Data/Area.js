var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'areas';
const _primaryKey = 'area_id';

//#region

exports.GetAreaById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllAreas = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddArea = async (area, callback) => {
    return await Add(_tableName, area, callback);
}

exports.UpdateArea = async (key, area, callback) => { 
    return await Update(_tableName, _primaryKey, key, area, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion