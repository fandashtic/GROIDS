var { GetById, GetAll, Add, Update, Delete } = require('./../Shared/TableReposidery');

const _tableName = 'users';
const _primaryKey = 'email_id';

exports.GetUserById = async (key, callback) => {
    return await GetById(_tableName, _primaryKey, key, callback);
};

exports.GetAllUsers = async (callback, filter) => {
    debugger;
    return await GetAll(_tableName, filter, callback);
};

exports.AddUser = async (user, callback) => {
    return await Add(_tableName, user, callback);
}

exports.UpdateUser = async (key, user, callback) => { 
    return await Update(_tableName, _primaryKey, key, user, callback);
}

exports.DeleteUer = async (key, callback) =>
{
    return await Delete(_tableName, _primaryKey, key, callback);
};