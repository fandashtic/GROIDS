import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'countries';
const _primaryKey = 'country_id';

//#region

let GetCountryDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllCountryData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveCountryData = async (country, callback) => {
    country = AddDetaultValues(country, 'country_id', PreFix.Country, country.created_by);
    return await Add(_tableName, _primaryKey, country, callback);
}

let UpdateCountryData = async (key, country, callback) => {
    country = UpdateDetaultValues(country, country.modified_by);
    return await Edit(_tableName, _primaryKey, key, country, callback);
}

let DeleteCountryData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetCountryDataById, GetAllCountryData, SaveCountryData, UpdateCountryData, DeleteCountryData };

//#endregion