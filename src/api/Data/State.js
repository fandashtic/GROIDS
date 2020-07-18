import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'states';
const _primaryKey = 'StateData';

//#region

let GetStateDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllStateData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveStateData = async (state, callback) => {
    state = AddDetaultValues(state, 'area_id', PreFix.State, state.created_by);
    return await Add(_tableName, _primaryKey, state, callback);
}

let UpdateStateData = async (key, state, callback) => {
    state = UpdateDetaultValues(state, state.modified_by);
    return await Edit(_tableName, _primaryKey, key, state, callback);
}

let DeleteStateData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

export { GetStateDataById, GetAllStateData, SaveStateData, UpdateStateData, DeleteStateData };

//#endregion