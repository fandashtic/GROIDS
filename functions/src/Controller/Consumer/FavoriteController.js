const{ GetAllMyFavorites, AddMyFavorite, UpdateMyFavorite, DeleteMyFavorite } = require('./../../Core/FavoriteManager');

let AddMyFavoriteAPI = async (myFavorite, callback) => {
    return await AddMyFavorite(myFavorite, callback);
};

let UpdateMyFavoriteAPI = async (myFavoriteId, myFavorite, callback) => {
    return await UpdateMyFavorite(myFavoriteId, myFavorite, callback);
};

let DeleteMyFavoriteAPI = async (myFavoriteId, callback) => {
    return await DeleteMyFavorite(myFavoriteId, callback);
};

let GetMyFavoritesAPI = async (filter, callback) => {
    return await GetAllMyFavorites(filter, callback);
};

module.exports = { AddMyFavoriteAPI, UpdateMyFavoriteAPI, DeleteMyFavoriteAPI, GetMyFavoritesAPI };