
var { GetAllMyFavorites, AddMyFavorite, UpdateMyFavorite, DeleteMyFavorite } = require('./../Core/MyFavoriteManager');

exports.AddMyFavorite = async (myFavorite, callback) => {
    return await AddMyFavorite(myFavorite, callback);
};

exports.UpdateMyFavorite = async (myFavoriteId, myFavorite, callback) => {
    return await UpdateMyFavorite(myFavoriteId, myFavorite, callback);
};

exports.DeleteMyFavorite = async (myFavoriteId, callback) => {
    return await DeleteMyFavorite(myFavoriteId, callback);
};

exports.GetMyFavorites = async (filter, callback) => {
    return await GetAllMyFavorites( filter, callback);
};