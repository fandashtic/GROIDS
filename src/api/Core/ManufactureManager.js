import { GetManufactureDataById, GetAllManufactureData, SaveManufactureData, UpdateManufactureData, DeleteManufactureData } from 'api/Data/Manufacture';

let AddManufacture = async (manufacture, callback) => {
    return await SaveManufactureData(manufacture, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data': manufacture,
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

let UpdateManufacture = async (key, manufacture, callback) => {
    return await UpdateManufactureData(key, manufacture, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data': manufacture,
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

let DeleteManufacture = async (key, callback) => {
    return await DeleteManufactureData(key, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data': manufacture,
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

let GetManufacture = async (manufactureName, callback) => {
    return await GetManufactureDataById(manufactureName, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data': manufacture,
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

let GetAllManufactures = async (filter, callback) => {
    return await GetAllManufactureData(filter, async (manufactures) => {
        if (manufactures) {
            return await callback({
                'data': manufactures,
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

export { AddManufacture, UpdateManufacture, DeleteManufacture, GetManufacture, GetAllManufactures };