import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'countrys';
const _primaryKey = 'country_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (country, callback) => {    
    country = AddDetaultValues(country, 'country_id', PreFix.Country, country.created_by);
    return await Add(_tableName, _primaryKey,country, callback);
}

let Update = async (key, country, callback) => { 
    return await Edit(_tableName, _primaryKey, key, country, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion