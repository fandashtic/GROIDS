import { Get, All, Add, Edit, Remove } from 'api/Shared/Reposidery';
import { AddDetaultValues, UpdateDetaultValues } from 'api/Shared/Util';
import { PreFix } from 'api/Shared/Constant/Enum';

const _tableName = 'states';
const _primaryKey = 'state_id';

//#region

let GetStateDataById = async (state_id, callback) => {
    return await Get(_tableName, _primaryKey, state_id, callback);
};

let GetAllStateData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveStateData = async (state, callback) => {
    state = AddDetaultValues(state, 'area_id', PreFix.State, state.created_by);
    return await Add(_tableName, _primaryKey, state, callback);
}

let UpdateStateData = async (state_id, state, callback) => {
    state = UpdateDetaultValues(state, state.modified_by);
    return await Edit(_tableName, _primaryKey, state_id, state, callback);
}

let DeleteStateData = async (state_id, callback) => {
    return await Remove(_tableName, _primaryKey, state_id, callback);
};

export { GetStateDataById, GetAllStateData, SaveStateData, UpdateStateData, DeleteStateData };

//#endregion