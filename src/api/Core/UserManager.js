import { GetById, GetAll, Save, Update, Delete } from 'api/Data/User';

let IsUserValid = async (userName, password, callback) => {
    return await GetById(userName, async (user) => {
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

let AddUser = async (user, callback) => {
    return await Save(user, async (user) => {
        if (user) {
            return await callback({
                'data': user,
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

let UpdateUser = async (key, user, callback) => {
    return await Update(key, user, async (user) => {
        if (user) {
            return await callback({
                'data': user,
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

let DeleteUser = async (key, callback) => {
    return await Delete(key, async (user) => {
        if (user) {
            return await callback({
                'data': user,
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

let GetUser = async (userName, callback) => {
    return await GetById(userName, async (user) => {
        if (user) {
            return await callback({
                'data': user,
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

let GetAllUsers = async (filter, callback) => {
    return await GetAll(filter, async (users) => {
        if (users) {
            return await callback({
                'data': users,
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

export { IsUserValid, AddUser, UpdateUser, DeleteUser, GetUser, GetAllUsers };