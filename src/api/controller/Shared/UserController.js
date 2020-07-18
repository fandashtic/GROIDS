import { GetAllUsers, IsUserValid, AddUser, UpdateUser, DeleteUser } from 'api/Controller/Shared/node_modules/api/Core/UserManager'

const IsUserValidAPI = async (userName, password, callback) => {
    return await IsUserValid(userName, password, callback);
};

const AddUserAPI = async (user, callback) => {
    return await AddUser(user, callback);
};

const UpdateUserAPI = async (userId, user, callback) => {
    return await UpdateUser(userId, user, callback);
};

const DeleteUserAPI = async (userId, callback) => {
    return await DeleteUser(userId, callback);
};

const GetUsersAPI = async (filter, callback) => {
    return await GetAllUsers(filter, callback);
};

export { IsUserValidAPI, AddUserAPI, UpdateUserAPI, DeleteUserAPI, GetUsersAPI };