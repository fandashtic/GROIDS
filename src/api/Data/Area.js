import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'areas';
const _primaryKey = 'area_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (area, callback) => {
    area = AddDetaultValues(area, 'area_id', PreFix.Area, area.created_by);
    return await Add(_tableName, _primaryKey, area, callback);
}

let Update = async (key, area, callback) => {
    area = UpdateDetaultValues(area, area.modified_by);
    return await Edit(_tableName, _primaryKey, key, area, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetById, GetAll, Save, Update, Delete };

//#endregion