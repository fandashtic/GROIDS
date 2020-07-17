import { GetAllStates, AddState, UpdateState, DeleteState } from 'api/Core/StateManager';

let AddStateAPI = async (state, callback) => {
    return await AddState(state, callback);
};

let UpdateStateAPI = async (stateId, state, callback) => {
    return await UpdateState(stateId, state, callback);
};

let DeleteStateAPI = async (stateId, callback) => {
    return await DeleteState(stateId, callback);
};

let GetStatesAPI = async (filter, callback) => {
    return await GetAllStates( filter, callback);
};

export { AddStateAPI, UpdateStateAPI, DeleteStateAPI, GetStatesAPI };