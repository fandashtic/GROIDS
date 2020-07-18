import { GetById, GetAll, Save, Update, Delete } from 'api/Data/City';

let IsCityValid = async (cityName, password, callback) => {
    return await GetById(cityName, async (city) => {
        if (city.password === password) {
            return await callback({
                'data': {
                    CityName: city.cityName,
                    CityDisplayName: city.firstName + ' ' + city.lastName,
                    CityType: city.cityType,
                    CompanyId: city.companyId,
                    StoreId: city.storeId,
                    CityProfileImage: city.profileImageUrl
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

let AddCity = async (city, callback) => {
    return await Save(city, async (city) => {
        if (city) {
            return await callback({
                'data':city,
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

let UpdateCity = async (key, city, callback) => { 
    return await Update(key, city, async (city) => {
        if (city) {
            return await callback({
                'data':city,
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

let DeleteCity = async (key, callback) =>
{
    return await Delete(key, async (city) => {
        if (city) {
            return await callback({
                'data':city,
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

let GetCity = async (cityName, callback) => {
    return await GetById(cityName, async (city) => {
        if (city) {
            return await callback({
                'data':city,
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

let GetAllCitys = async (filter, callback) => {
    return await GetAll(filter, async (citys) => {
        if (citys) {
            return await callback({
                'data':citys,
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

export { IsCityValid, AddCity, UpdateCity, DeleteCity, GetCity, GetAllCitys };