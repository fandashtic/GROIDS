
var { GetAllStates, AddState, UpdateState, DeleteState } = require('./../Core/StateManager');

exports.AddState = async (state, callback) => {
    return await AddState(state, callback);
};

exports.UpdateState = async (stateId, state, callback) => {
    return await UpdateState(stateId, state, callback);
};

exports.DeleteState = async (stateId, callback) => {
    return await DeleteState(stateId, callback);
};

exports.GetStates = async (filter, callback) => {
    return await GetAllStates( filter, callback);
};