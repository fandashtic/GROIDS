var { GetAllUsers, GetUserById, Add, Update, Delete } = require('./../Data/User');

exports.IsUserValid = async (userName, password, callback) => {
    return await GetUserById(userName, async (user) => {
        if (user.password === password) {
            return await callback({
                'data': {
                    UserName: user.userName,
                    UserDisplayName: user.firstName + ' ' + user.lastName,
                    UserType: user.userType,
                    CompanyId: user.companyId,
                    StoreId: user.storeId,
                    UserProfileImage: user.profileImageUrl
                },
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

exports.AddUser = async (user, callback) => {
    return await Add(user, async (user) => {
        if (user) {
            return await callback({
                'data':user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

exports.UpdateUser = async (key, user, callback) => { 
    return await Update(key, user, async (user) => {
        if (user) {
            return await callback({
                'data':user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

exports.DeleteUser = async (key, callback) =>
{
    return await Delete(key, async (user) => {
        if (user) {
            return await callback({
                'data':user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

exports.GetUser = async (userName, callback) => {
    return await GetUserById(userName, async (user) => {
        if (user) {
            return await callback({
                'data':user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

exports.GetAllUsers = async (filter, callback) => {
    return await GetAllUsers(filter, async (users) => {
        if (users) {
            return await callback({
                'data':users,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};
