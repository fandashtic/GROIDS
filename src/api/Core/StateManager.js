var { GetAllStates, GetStateById, Add, Update, Delete } = require('./../Data/State');

exports.IsStateValid = async (stateName, password, callback) => {
    return await GetStateById(stateName, async (state) => {
        if (state.password === password) {
            return await callback({
                'data': {
                    StateName: state.stateName,
                    StateDisplayName: state.firstName + ' ' + state.lastName,
                    StateType: state.stateType,
                    CompanyId: state.companyId,
                    StoreId: state.storeId,
                    StateProfileImage: state.profileImageUrl
                },
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

exports.AddState = async (state, callback) => {
    return await Add(state, async (state) => {
        if (state) {
            return await callback({
                'data':state,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

exports.UpdateState = async (key, state, callback) => { 
    return await Update(key, state, async (state) => {
        if (state) {
            return await callback({
                'data':state,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

exports.DeleteState = async (key, callback) =>
{
    return await Delete(key, async (state) => {
        if (state) {
            return await callback({
                'data':state,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

exports.GetState = async (stateName, callback) => {
    return await GetStateById(stateName, async (state) => {
        if (state) {
            return await callback({
                'data':state,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

exports.GetAllStates = async (filter, callback) => {
    return await GetAllStates(filter, async (states) => {
        if (states) {
            return await callback({
                'data':states,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};
