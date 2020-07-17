import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Inventory';

let AddManufacture = async (manufacture, callback) => {
    return await Save(manufacture, async (manufacture) => {
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
    return await Update(key, manufacture, async (manufacture) => {
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
    return await Delete(key, async (manufacture) => {
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
    return await GetById(manufactureName, async (manufacture) => {
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
    return await GetAll(filter, async (manufactures) => {
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