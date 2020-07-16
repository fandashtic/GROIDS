
var { GetAllCompanys, AddCompany, UpdateCompany, DeleteCompany } = require('./../Core/CompanyManager');

exports.AddCompany = async (company, callback) => {
    return await AddCompany(company, callback);
};

exports.UpdateCompany = async (companyId, company, callback) => {
    return await UpdateCompany(companyId, company, callback);
};

exports.DeleteCompany = async (companyId, callback) => {
    return await DeleteCompany(companyId, callback);
};

exports.GetCompanys = async (filter, callback) => {
    return await GetAllCompanys( filter, callback);
};