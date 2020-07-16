var { GetAllAreas, AddArea, UpdateArea, DeleteArea } = require('./../Core/AreaManager');

exports.AddArea = async (area, callback) => {
    return await AddArea(area, callback);
};

exports.UpdateArea = async (areaId, area, callback) => {
    return await UpdateArea(areaId, area, callback);
};

exports.DeleteArea = async (areaId, callback) => {
    return await DeleteArea(areaId, callback);
};

exports.GetAreas = async (filter, callback) => {
    return await GetAllAreas( filter, callback);
};