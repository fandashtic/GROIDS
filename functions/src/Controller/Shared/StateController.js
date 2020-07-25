const{ GetAllStates, AddState, UpdateState, DeleteState, StateLookUp } = require('./../../Core/StateManager');

let AddStateAPI = async (state, callback) => {
    return await AddState(state, callback);
};

let UpdateStateAPI = async (state_id, state, callback) => {
    return await UpdateState(state_id, state, callback);
};

let DeleteStateAPI = async (state_id, callback) => {
    return await DeleteState(state_id, callback);
};

let GetStatesAPI = async (filter, callback) => {
    return await GetAllStates(filter, callback);
};

let StateLookUpAPI = async (state_id, callback) => {
    return await StateLookUp(state_id, callback);
};

module.exports = { AddStateAPI, UpdateStateAPI, DeleteStateAPI, GetStatesAPI, StateLookUpAPI };