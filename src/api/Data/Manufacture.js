var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'manufactures';
const _primaryKey = 'manufacture_id';

//#region

exports.GetManufactureById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllManufactures = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddManufacture = async (manufacture, callback) => {
    return await Add(_tableName, manufacture, callback);
}

exports.UpdateManufacture = async (key, manufacture, callback) => { 
    return await Update(_tableName, _primaryKey, key, manufacture, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion