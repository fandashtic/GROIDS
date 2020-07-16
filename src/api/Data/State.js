var { GetById, GetAll, Add, Update, Delete } = require('../Shared/TableReposidery');

const _tableName = 'states';
const _primaryKey = 'state_id';

//#region

exports.GetStateById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllStates = async (filter, callback) => {
    return await GetAll(_tableName, filter, callback);
};

exports.AddState = async (state, callback) => {
    return await Add(_tableName, state, callback);
}

exports.UpdateState = async (key, state, callback) => { 
    return await Update(_tableName, _primaryKey, key, state, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};

//#endregion