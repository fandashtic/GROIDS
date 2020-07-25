const { GetById, GetAll, Save, Update, Delete } = require('./../Data/MyFavorite');

let IsMyFavoriteValid = async (myFavoriteName, password, callback) => {
    return await GetById(myFavoriteName, async (myFavorite) => {
        if (myFavorite.password === password) {
            return await callback({
                'data': {
                    MyFavoriteName: myFavorite.myFavoriteName,
                    MyFavoriteDisplayName: myFavorite.firstName + ' ' + myFavorite.lastName,
                    MyFavoriteType: myFavorite.myFavoriteType,
                    CompanyId: myFavorite.companyId,
                    store_id: myFavorite.store_id,
                    MyFavoriteProfileImage: myFavorite.profileImageUrl
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

let AddMyFavorite = async (myFavorite, callback) => {
    return await Save(myFavorite, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data': myFavorite,
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

let UpdateMyFavorite = async (key, myFavorite, callback) => {
    return await Update(key, myFavorite, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data': myFavorite,
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

let DeleteMyFavorite = async (key, callback) => {
    return await Delete(key, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data': myFavorite,
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

let GetMyFavorite = async (myFavoriteName, callback) => {
    return await GetById(myFavoriteName, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data': myFavorite,
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

let GetAllMyFavorites = async (filter, callback) => {
    return await GetAll(filter, async (myFavorites) => {
        if (myFavorites) {
            return await callback({
                'data': myFavorites,
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

module.exports = { IsMyFavoriteValid, AddMyFavorite, UpdateMyFavorite, DeleteMyFavorite, GetMyFavorite, GetAllMyFavorites };