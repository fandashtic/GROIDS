
var { GetAllUsers, IsUserValid, AddUser, UpdateUser, DeleteUser } = require('./../Core/UserManager');

exports.IsUserValid = async (userName, password, callback) => {
    return await IsUserValid(userName, password, callback);
};

exports.AddUser = async (user, callback) => {
    return await AddUser(user, callback);
};

exports.UpdateUser = async (userId, user, callback) => {
    return await UpdateUser(userId, user, callback);
};

exports.DeleteUser = async (userId, callback) => {
    return await DeleteUser(userId, callback);
};

exports.GetUsers = async (filter, callback) => {
    return await GetAllUsers( filter, callback);
};