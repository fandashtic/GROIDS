
import { GetAllCities, AddCity, UpdateCity, DeleteCity } from 'api/Controller/Shared/node_modules/api/Core/CityManager';

let AddCityAPI = async (city, callback) => {
    return await AddCity(city, callback);
};

let UpdateCityAPI = async (cityId, city, callback) => {
    return await UpdateCity(cityId, city, callback);
};

let DeleteCityAPI = async (cityId, callback) => {
    return await DeleteCity(cityId, callback);
};

let GetCiteisAPI = async (filter, callback) => {
    return await GetAllCities( filter, callback);
};

export { AddCityAPI, UpdateCityAPI, DeleteCityAPI, GetCiteisAPI };