import { GetAllCompanies, AddCompany, UpdateCompany, DeleteCompany } from 'api/Core/CompanyManager';

let AddCompanyAPI = async (company, callback) => {
    return await AddCompany(company, callback);
};

let UpdateCompanyAPI = async (companyId, company, callback) => {
    return await UpdateCompany(companyId, company, callback);
};

let DeleteCompanyAPI = async (companyId, callback) => {
    return await DeleteCompany(companyId, callback);
};

let GetCompaniesAPI = async (filter, callback) => {
    return await GetAllCompanies(filter, callback);
};

export { AddCompanyAPI, UpdateCompanyAPI, DeleteCompanyAPI, GetCompaniesAPI };