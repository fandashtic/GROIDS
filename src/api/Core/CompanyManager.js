import { GetById, GetAll, Save, Update, Delete } from 'api/Data/Company';

let IsCompanyValid = async (companyName, password, callback) => {
    return await GetById(companyName, async (company) => {
        if (company.password === password) {
            return await callback({
                'data': {
                    CompanyName: company.companyName,
                    CompanyDisplayName: company.firstName + ' ' + company.lastName,
                    CompanyType: company.companyType,
                    CompanyId: company.companyId,
                    store_id: company.store_id,
                    CompanyProfileImage: company.profileImageUrl
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

let AddCompany = async (company, callback) => {
    return await Save(company, async (company) => {
        if (company) {
            return await callback({
                'data':company,
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

let UpdateCompany = async (key, company, callback) => { 
    return await Update(key, company, async (company) => {
        if (company) {
            return await callback({
                'data':company,
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

let DeleteCompany = async (key, callback) =>
{
    return await Delete(key, async (company) => {
        if (company) {
            return await callback({
                'data':company,
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

let GetCompany = async (companyName, callback) => {
    return await GetById(companyName, async (company) => {
        if (company) {
            return await callback({
                'data':company,
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

let GetAllCompanys = async (filter, callback) => {
    return await GetAll(filter, async (companys) => {
        if (companys) {
            return await callback({
                'data':companys,
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

export { IsCompanyValid, AddCompany, UpdateCompany, DeleteCompany, GetCompany, GetAllCompanys };