import { GetAllMyFavorites, AddMyFavorite, UpdateMyFavorite, DeleteMyFavorite } from 'api/Controller/Consumer/node_modules/api/Core/MyFavoriteManager';

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

export { AddMyFavoriteAPI, UpdateMyFavoriteAPI, DeleteMyFavoriteAPI, GetMyFavoritesAPI };