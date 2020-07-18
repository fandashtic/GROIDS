import { GetCityDataById, GetAllCityData, SaveCityData, UpdateCityData, DeleteCityData } from 'api/Data/City';

let IsCityValid = async (cityName, password, callback) => {
    return await GetCityDataById(cityName, async (city) => {
        if (city.password === password) {
            return await callback({
                'data': {
                    CityName: city.cityName,
                    CityDisplayName: city.firstName + ' ' + city.lastName,
                    CityType: city.cityType,
                    CompanyId: city.companyId,
                    store_id: city.store_id,
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
    return await SaveCityData(city, async (city) => {
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
    return await UpdateCityData(key, city, async (city) => {
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
    return await DeleteCityData(key, async (city) => {
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
    return await GetCityDataById(cityName, async (city) => {
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
    return await GetAllCityData(filter, async (citys) => {
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