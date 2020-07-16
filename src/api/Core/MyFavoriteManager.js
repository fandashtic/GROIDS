var { GetAllMyFavorites, GetMyFavoriteById, Add, Update, Delete } = require('./../Data/MyFavorite');

exports.IsMyFavoriteValid = async (myFavoriteName, password, callback) => {
    return await GetMyFavoriteById(myFavoriteName, async (myFavorite) => {
        if (myFavorite.password === password) {
            return await callback({
                'data': {
                    MyFavoriteName: myFavorite.myFavoriteName,
                    MyFavoriteDisplayName: myFavorite.firstName + ' ' + myFavorite.lastName,
                    MyFavoriteType: myFavorite.myFavoriteType,
                    CompanyId: myFavorite.companyId,
                    StoreId: myFavorite.storeId,
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

exports.AddMyFavorite = async (myFavorite, callback) => {
    return await Add(myFavorite, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data':myFavorite,
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

exports.UpdateMyFavorite = async (key, myFavorite, callback) => { 
    return await Update(key, myFavorite, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data':myFavorite,
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

exports.DeleteMyFavorite = async (key, callback) =>
{
    return await Delete(key, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data':myFavorite,
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

exports.GetMyFavorite = async (myFavoriteName, callback) => {
    return await GetMyFavoriteById(myFavoriteName, async (myFavorite) => {
        if (myFavorite) {
            return await callback({
                'data':myFavorite,
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

exports.GetAllMyFavorites = async (filter, callback) => {
    return await GetAllMyFavorites(filter, async (myFavorites) => {
        if (myFavorites) {
            return await callback({
                'data':myFavorites,
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
