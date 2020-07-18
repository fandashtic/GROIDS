import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'areas';
const _primaryKey = 'area_id';

//#region

let GetAreaDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllAreaData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveAreaData = async (area, callback) => {
    area = AddDetaultValues(area, 'area_id', PreFix.Area, area.created_by);
    return await Add(_tableName, _primaryKey, area, callback);
}

let UpdateAreaData = async (key, area, callback) => {
    area = UpdateDetaultValues(area, area.modified_by);
    return await Edit(_tableName, _primaryKey, key, area, callback);
}

let DeleteAreaData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetAreaDataById, GetAllAreaData, SaveAreaData, UpdateAreaData, DeleteAreaData };

//#endregion