const functions = require('firebase-functions');
const { EnCode } = require('./src/Shared/Util');
const { SendEmail } = require('./src/Shared/SendEmail');
//var config = require('./appConfig.json');

//#region Imports

//#region Shared Controller

const { AddManufactureAPI, UpdateManufactureAPI, DeleteManufactureAPI, GetManufacturesAPI, GetManufactureAPI, ManufactureLookUpAPI } = require('./src/Controller/Shared/ManufactureController');
const { AddAreaAPI, UpdateAreaAPI, DeleteAreaAPI, GetAreaAPI, GetAreasAPI, AreaLookUpAPI } = require('./src/Controller/Shared/AreaController');
const { AddBrandAPI, UpdateBrandAPI, DeleteBrandAPI, GetBrandsAPI, BrandLookUpAPI, GetBrandAPI } = require('./src/Controller/Shared/BrandController');
const { AddCityAPI, UpdateCityAPI, DeleteCityAPI, GetCiteisAPI, GetCityAPI, CityLookUpAPI } = require('./src/Controller/Shared/CityController');
const { AddCountryAPI, UpdateCountryAPI, DeleteCountryAPI, GetCountriesAPI, CountryLookUpAPI, GetCountryAPI } = require('./src/Controller/Shared/CountryController');
const { GetProductCategoryAPI, ProductCategoryLookUpAPI, AddProductCategoryAPI, UpdateProductCategoryAPI, DeleteProductCategoryAPI, GetProductCategoriesAPI } = require('./src/Controller/Shared/ProductCategoryController');
const { AddProductAPI, UpdateProductAPI, DeleteProductAPI, GetProductsAPI, GetProductAPI, ProductLookUpAPI } = require('./src/Controller/Shared/ProductController');
const { AddProductFamilyAPI, GetProductFamilyAPI, UpdateProductFamilyAPI, DeleteProductFamilyAPI, GetProductFamiliesAPI, ProductFamilyLookUpAPI } = require('./src/Controller/Shared/ProductFamilyController');
const { AddStateAPI, UpdateStateAPI, DeleteStateAPI, GetStateAPI, GetStatesAPI, StateLookUpAPI } = require('./src/Controller/Shared/StateController');
const { AddStoreAPI, UpdateStoreAPI, DeleteStoreAPI, GetStoresAPI, GetStoreAPI, StoreLookUpAPI } = require('./src/Controller/Shared/StoreController');
const { AddUserAPI, UpdateUserAPI, DeleteUserAPI, GetUserAPI, GetUsersAPI, ChangePasswordAPI } = require('./src/Controller/Shared/UserController');

//#endregion Shared Controller

//#region Company Controller

const { AddCompanyAPI, UpdateCompanyAPI, DeleteCompanyAPI, GetCompanyAPI, GetCompaniesAPI } = require('./src/Controller/Company/CompanyController');

//#endregion Company Controller

//#region Store Controller

const { AddDeliveryAPI, UpdateDeliveryAPI, DeleteDeliveryAPI, GetDeliveryAPI, GetDeliverysAPI } = require('./src/Controller/Store/DeliveryController');
const { AddInventoryAPI, UpdateInventoryAPI, DeleteInventoryAPI, GetInventoryAPI, GetInventorysAPI } = require('./src/Controller/Store/InventoryController');
const { AddOrderAPI, UpdateOrderAPI, DeleteOrderAPI, GetOrderAPI, GetOrdersAPI } = require('./src/Controller/Store/OrderController');
const { AddPaymentAPI, UpdatePaymentAPI, DeletePaymentAPI, GetPaymentAPI, GetPaymentsAPI } = require('./src/Controller/Store/PaymentController');
const { AddSchemeAPI, UpdateSchemeAPI, DeleteSchemeAPI, GetSchemeAPI, GetSchemesAPI } = require('./src/Controller/Store/SchemeController');

//#endregion Store Controller

//#region Consumer Controller

const { AddCartAPI, UpdateCartAPI, DeleteCartAPI, GetCartAPI, GetCartsAPI } = require('./src/Controller/Consumer/CartController');
const { AddFavoriteAPI, UpdateFavoriteAPI, DeleteFavoriteAPI, GetFavoritesAPI } = require('./src/Controller/Consumer/FavoriteController');

//#endregion Consumer Controller

//#endregion Imports

//#region API's

//#region Manufacture API

exports.AddManufacture = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddManufactureAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateManufacture = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateManufactureAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteManufacture = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteManufactureAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetManufacture = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetManufactureAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetManufactures = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetManufacturesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.ManufactureLookUp = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    ManufactureLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Manufacture API

//#region Area API

exports.AddArea = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddAreaAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateArea = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateAreaAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteArea = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteAreaAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetArea = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetAreaAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetAreas = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetAreasAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.AreaLookUp = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    AreaLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Area API

//#region Brand API

exports.AddBrand = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddBrandAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateBrand = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateBrandAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteBrand = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteBrandAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetBrand = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetBrandAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetBrands = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetBrandsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.BrandLookUp = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    BrandLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Brand API

//#region City API

exports.AddCity = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCityAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateCity = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCityAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteCity = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCityAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetCity = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCityAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetCities = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCiteisAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.CityLookUp = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    CityLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion City API

//#region Country API

exports.AddCountry = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCountryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateCountry = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCountryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteCountry = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCountryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetCountry = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCountryAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetCountries = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCountriesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.CountryLookUp = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    CountryLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Country API

//#region ProductCategory API

exports.AddProductCategory = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddProductCategoryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateProductCategory = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateProductCategoryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteProductCategory = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteProductCategoryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetProductCategory = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductCategoryAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetProductCategories = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductCategoriesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.ProductCategoryLookUp = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    ProductCategoryLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion ProductCategory API

//#region Product API

exports.AddProduct = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddProductAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateProduct = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateProductAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteProduct = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteProductAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetProduct = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetProducts = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.ProductLookUp = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    ProductLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Product API

//#region ProductFamily API

exports.AddProductFamily = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddProductFamilyAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateProductFamily = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateProductFamilyAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteProductFamily = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteProductFamilyAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetProductFamily = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductFamilyAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetProductFamiless = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetProductFamiliesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.ProductFamilyLookUp = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    ProductFamilyLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion ProductFamily API

//#region State API

exports.AddState = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddStateAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateState = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateStateAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteState = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteStateAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetState = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetStateAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetStates = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetStatesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.StateLookUp = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    StateLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion State API

//#region Store API

exports.AddStore = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddStoreAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateStore = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateStoreAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteStore = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteStoreAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetStore = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetStoreAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetStore = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetStoresAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.StoreLookUp = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    StoreLookUpAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Store API

//#region User API

exports.AddUser = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddUserAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateUser = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateUserAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteUser = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteUserAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetUser = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetUserAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetUsers = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetUsersAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.ChangePassword = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.user_id != null && request.body.new_password !== undefined && request.body.old_password !== undefined) {
    ChangePasswordAPI(request.body.user_id, request.body.new_password, request.body.old_password, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion User API

//#region Company API

exports.AddCompany = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCompanyAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateCompany = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCompanyAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteCompany = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCompanyAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetCompany = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCompanyAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetCompanies = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCompaniesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

//#endregion Company API

//#region Delivery API

exports.AddDelivery = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddDeliveryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateDelivery = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateDeliveryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteDelivery = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteDeliveryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetDelivery = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetDeliveryAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetDeliveries = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetDeliverysAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// exports.DeliveryLookUp = functions.https.onRequest((request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     DeliveryLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Delivery API

//#region Inventory API

exports.AddInventory = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddInventoryAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateInventory = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateInventoryAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteInventory = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteInventoryAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetInventory = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetInventoryAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetInventories = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetInventorysAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// exports.InventoryLookUp = functions.https.onRequest((request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     InventoryLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Inventory API

//#region Order API

exports.AddOrder = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddOrderAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateOrder = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateOrderAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteOrder = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteOrderAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetOrder = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetOrderAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetOrders = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetOrdersAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// exports.OrderLookUp = functions.https.onRequest((request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     OrderLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Order API

//#region Payment API

exports.AddPayment = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddPaymentAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdatePayment = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdatePaymentAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeletePayment = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeletePaymentAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetPayment = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetPaymentAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetPayments = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetPaymentsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// exports.PaymentLookUp = functions.https.onRequest((request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     PaymentLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Payment API

//#region Scheme API

exports.AddScheme = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddSchemeAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateScheme = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateSchemeAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteScheme = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteSchemeAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetScheme = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetSchemeAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetSchemes = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetSchemesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// exports.SchemeLookUp = functions.https.onRequest((request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     SchemeLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Scheme API

//#region Cart API

exports.AddCart = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddCartAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateCart = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateCartAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteCart = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteCartAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetCart = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCartAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetCarts = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetCartsAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// exports.CartLookUp = functions.https.onRequest((request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     CartLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Cart API

//#region Favorite API

exports.AddFavorite = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined) {
    AddFavoriteAPI(request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.UpdateFavorite = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.inputmodel != null && request.body.inputmodel !== undefined && request.body.id !== undefined) {
    UpdateFavoriteAPI(request.body.id, request.body.inputmodel, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.DeleteFavorite = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.id != null) {
    DeleteFavoriteAPI(request.body.id, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetFavorites = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetFavoritesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

exports.GetFavorites = functions.https.onRequest((request, response) => {
  if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
    GetFavoritesAPI(request.body.filter, (data, err) => {
      ResponseAPI(response, data, err);
    });
  } else {
    response.send(request.body);
  }
});

// exports.FavoriteLookUp = functions.https.onRequest((request, response) => {
//   if (request.body !== null && request.body !== undefined && request.body.filter != null && request.body.filter !== undefined) {
//     FavoriteLookUpAPI(request.body.filter, (data, err) => {
//       ResponseAPI(response, data, err);
//     });
//   }else{
//     response.send(request.body);
//   }
// });

//#endregion Favorite API

//#endregion API's

//#region Common API

exports.SendEmail = functions.https.onRequest((request, response) => {
  SendEmail(request.body.mailOptions, response);
});

//#endregion Common API

//#region  Private

let ResponseAPI = (response, data, err) => {
  if (data) {
    return response.send(EnCode(JSON.stringify(data)));
  } else {
    return response.send(EnCode(JSON.stringify(err)));
  }
};

//#endregion  Private