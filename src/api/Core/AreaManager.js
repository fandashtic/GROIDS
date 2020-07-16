var { GetAllAreas, GetAreaById, Add, Update, Delete } = require('./../Data/Area');

exports.IsAreaValid = async (areaName, password, callback) => {
    return await GetAreaById(areaName, async (area) => {
        if (area.password === password) {
            return await callback({
                'data': {
                    AreaId: area.area_id,
                    AreaName: area.areaName,
                    CompanyId: area.companyId,
                    StoreId: area.storeId,
                    AreaProfileImage: area.profileImageUrl
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

exports.AddArea = async (area, callback) => {
    return await Add(area, async (area) => {
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

exports.UpdateArea = async (key, area, callback) => { 
    return await Update(key, area, async (area) => {
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

exports.DeleteArea = async (key, callback) =>
{
    return await Delete(key, async (area) => {
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

exports.GetArea = async (areaName, callback) => {
    return await GetAreaById(areaName, async (area) => {
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

exports.GetAllAreas = async (filter, callback) => {
    return await GetAllAreas(filter, async (areas) => {
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
