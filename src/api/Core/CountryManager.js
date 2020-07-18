import { GetCountryDataById, GetAllCountryData, SaveCountryData, UpdateCountryData, DeleteCountryData } from 'api/Data/Country';

let IsCountryValid = async (countryName, password, callback) => {
    return await GetCountryDataById(countryName, async (country) => {
        if (country.password === password) {
            return await callback({
                'data': {
                    CountryName: country.countryName,
                    CountryDisplayName: country.firstName + ' ' + country.lastName,
                    CountryType: country.countryType,
                    CompanyId: country.companyId,
                    store_id: country.store_id,
                    CountryProfileImage: country.profileImageUrl
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

let AddCountry = async (country, callback) => {
    return await SaveCountryData(country, async (country) => {
        if (country) {
            return await callback({
                'data':country,
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

let UpdateCountry = async (key, country, callback) => { 
    return await UpdateCountryData(key, country, async (country) => {
        if (country) {
            return await callback({
                'data':country,
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

let DeleteCountry = async (key, callback) =>
{
    return await DeleteCountryData(key, async (country) => {
        if (country) {
            return await callback({
                'data':country,
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

let GetCountry = async (countryName, callback) => {
    return await GetCountryDataById(countryName, async (country) => {
        if (country) {
            return await callback({
                'data':country,
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

let GetAllCountrys = async (filter, callback) => {
    return await GetAllCountryData(filter, async (countrys) => {
        if (countrys) {
            return await callback({
                'data':countrys,
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

export { IsCountryValid, AddCountry, UpdateCountry, DeleteCountry, GetCountry, GetAllCountrys };