import { GetFavorite, GetAllFavorites, AddFavorite, UpdateFavorite, DeleteFavorite } from 'api/Core/FavoriteManager';

let AddFavoriteAPI = async (favorite, callback) => {
    return await AddFavorite(favorite, callback);
};

let UpdateFavoriteAPI = async (favorite_id, favorite, callback) => {
    return await UpdateFavorite(favorite_id, favorite, callback);
};

let DeleteFavoriteAPI = async (favorite_id, callback) => {
    return await DeleteFavorite(favorite_id, callback);
};

let GetFavoriteAPI = async (favorite_id, callback) => {
    return await GetFavorite(favorite_id, callback);
};

let GetFavoritesAPI = async (filter, callback) => {
    return await GetAllFavorites(filter, callback);
};

export { AddFavoriteAPI, UpdateFavoriteAPI, DeleteFavoriteAPI, GetFavoriteAPI, GetFavoritesAPI };