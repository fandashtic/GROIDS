
import { GetAllManufactures, AddManufacture, UpdateManufacture, DeleteManufacture } from 'api/Controller/Shared/node_modules/api/Core/ManufactureManager';

let AddManufactureAPI = async (manufacture, callback) => {
    return await AddManufacture(manufacture, callback);
};

let UpdateManufactureAPI = async (manufactureId, manufacture, callback) => {
    return await UpdateManufacture(manufactureId, manufacture, callback);
};

let DeleteManufactureAPI = async (manufactureId, callback) => {
    return await DeleteManufacture(manufactureId, callback);
};

let GetManufacturesAPI = async (filter, callback) => {
    return await GetAllManufactures(filter, callback);
};

export { AddManufactureAPI, UpdateManufactureAPI, DeleteManufactureAPI, GetManufacturesAPI };