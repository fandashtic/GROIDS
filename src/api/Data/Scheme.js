import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'schemes';
const _primaryKey = 'scheme_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (scheme, callback) => {    
    scheme = AddDetaultValues(scheme, 'scheme_id', PreFix.Scheme, scheme.created_by);
    return await Add(_tableName, _primaryKey,scheme, callback);
}

let Update = async (key, scheme, callback) => { 
    scheme = UpdateDetaultValues(scheme, scheme.modified_by);
    return await Edit(_tableName, _primaryKey, key, scheme, callback);
}

let Delete = async (key, callback) =>
{
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion