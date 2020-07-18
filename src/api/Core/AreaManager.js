import { GetAreaDataById, GetAllAreaData, SaveAreaData, UpdateAreaData, DeleteAreaData } from 'api/Data/Area';

let AddArea = async (area, callback) => {
    return await SaveAreaData(area, async (area) => {
        if (area) {
            return await callback({
                'data':area,
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

let UpdateArea = async (key, area, callback) => { 
    return await UpdateAreaData(key, area, async (area) => {
        if (area) {
            return await callback({
                'data':area,
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

let DeleteArea = async (key, callback) =>
{
    return await DeleteAreaData(key, async (area) => {
        if (area) {
            return await callback({
                'data':area,
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

let GetArea = async (areaName, callback) => {
    return await GetAreaDataById(areaName, async (area) => {
        if (area) {
            return await callback({
                'data':area,
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

let GetAllAreas = async (filter, callback) => {
    return await GetAllAreaData(filter, async (areas) => {
        if (areas) {
            return await callback({
                'data':areas,
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

export { AddArea, UpdateArea, DeleteArea, GetArea, GetAllAreas };