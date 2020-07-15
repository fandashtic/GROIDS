var { GetById, GetAll, Add, Update, Delete } = require('./../Shared/TableReposidery');

const _tableName = 'users';
const _primaryKey = 'email_id';

exports.GetUserById = async (key, res) => {
    return await GetById(_tableName, _primaryKey, key, res);
};

exports.GetAllUsers = async (res, filter) => {
    return await GetAll(_tableName, filter, res);
};

exports.AddUser = async (user, res) => {
    return await Add(_tableName, user, res);
}

exports.UpdateUser = async (key, user, res) => { 
    return await Update(_tableName, _primaryKey, key, user, res);
}

exports.DeleteUer = async (key, res) =>
{
    return await Delete(_tableName, _primaryKey, key, res);
};