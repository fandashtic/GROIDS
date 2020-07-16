var { GetAllManufactures, GetManufactureById, Add, Update, Delete } = require('./../Data/Manufacture');

exports.IsManufactureValid = async (manufactureName, password, callback) => {
    return await GetManufactureById(manufactureName, async (manufacture) => {
        if (manufacture.password === password) {
            return await callback({
                'data': {
                    ManufactureName: manufacture.manufactureName,
                    ManufactureDisplayName: manufacture.firstName + ' ' + manufacture.lastName,
                    ManufactureType: manufacture.manufactureType,
                    CompanyId: manufacture.companyId,
                    StoreId: manufacture.storeId,
                    ManufactureProfileImage: manufacture.profileImageUrl
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

exports.AddManufacture = async (manufacture, callback) => {
    return await Add(manufacture, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data':manufacture,
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

exports.UpdateManufacture = async (key, manufacture, callback) => { 
    return await Update(key, manufacture, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data':manufacture,
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

exports.DeleteManufacture = async (key, callback) =>
{
    return await Delete(key, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data':manufacture,
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

exports.GetManufacture = async (manufactureName, callback) => {
    return await GetManufactureById(manufactureName, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data':manufacture,
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

exports.GetAllManufactures = async (filter, callback) => {
    return await GetAllManufactures(filter, async (manufactures) => {
        if (manufactures) {
            return await callback({
                'data':manufactures,
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
