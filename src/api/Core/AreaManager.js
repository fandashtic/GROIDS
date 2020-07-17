import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Area';

let IsAreaValid = async (areaName, password, callback) => {
    return await GetById(areaName, async (area) => {
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

let AddArea = async (area, callback) => {
    return await Save(area, async (area) => {
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

let DeleteArea = async (key, callback) =>
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

let GetArea = async (areaName, callback) => {
    return await GetById(areaName, async (area) => {
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
    return await GetAll(filter, async (areas) => {
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

export { IsAreaValid, AddArea, UpdateArea, DeleteArea, GetArea, GetAllAreas };