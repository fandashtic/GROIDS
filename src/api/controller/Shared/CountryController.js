
import { GetAllCountrys, AddCountry, UpdateCountry, DeleteCountry } from 'api/Core/CountryManager';

let AddCountryAPI = async (country, callback) => {
    return await AddCountry(country, callback);
};

let UpdateCountryAPI = async (countryId, country, callback) => {
    return await UpdateCountry(countryId, country, callback);
};

let DeleteCountryAPI = async (countryId, callback) => {
    return await DeleteCountry(countryId, callback);
};

let GetCountriesAPI = async (filter, callback) => {
    return await GetAllCountrys( filter, callback);
};

export { AddCountryAPI, UpdateCountryAPI, DeleteCountryAPI, GetCountriesAPI };