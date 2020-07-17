import {GetAllUsers, IsUserValid, AddUser, UpdateUser, DeleteUser} from 'api/Core/UserManager'

const IsUserValid = async (userName, password, callback) => {
    return await IsUserValid(userName, password, callback);
};

const AddUser = async (user, callback) => {
    return await AddUser(user, callback);
};

const UpdateUser = async (userId, user, callback) => {
    return await UpdateUser(userId, user, callback);
};

const DeleteUser = async (userId, callback) => {
    return await DeleteUser(userId, callback);
};

const GetUsers = async (filter, callback) => {
    return await GetAllUsers( filter, callback);
};

export{IsUserValid,AddUser,UpdateUser,DeleteUser,GetUsers}