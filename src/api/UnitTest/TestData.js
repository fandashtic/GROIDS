import { GetNewKey, AddDetaultValues, GetDate } from 'api/Shared/Util';
import { PreFix, UserType, StoreType, ActiveStatus } from 'api/Shared/Constant/Enum';
import { AddManufactureAPI } from 'api/Controller/Shared/ManufactureController';
import { AddBrandAPI } from 'api/Controller/Shared/BrandController';
import { AddProductCategoryAPI } from 'api/Controller/Shared/ProductCategoryController';
import { AddProductFamilyAPI } from 'api/Controller/Shared/ProductFamilyController';
import { ProductLookUpAPI, AddProductAPI, GetProductAPI } from 'api/Controller/Shared/ProductController';
import { IsUserValidAPI, AddUserAPI } from 'api/Controller/Shared/UserController';
import { StoreLookUpAPI, AddStoreAPI, GetStoresAPI, GetStoreAPI } from 'api/Controller/Shared/StoreController';

const company_id = GetNewKey(PreFix.Company);
const manufacture_id = GetNewKey(PreFix.Manufacture);
const brand_id = GetNewKey(PreFix.Brand);
const product_category_id = GetNewKey(PreFix.ProductCategory);
const product_family_id = GetNewKey(PreFix.product_family);
const store_id = GetNewKey(PreFix.Store);
const product_id = GetNewKey(PreFix.Product);
const created_by = GetNewKey(PreFix.User);
const country_id = GetNewKey(PreFix.Country);
const state_id = GetNewKey(PreFix.State);
const city_id = GetNewKey(PreFix.City);
const area_id = GetNewKey(PreFix.Area);


let AddManufacture = () => {
    const manufacture = {
        manufacture_id: manufacture_id,
        manufacture_name: 'ITC',
        company_id: 'company_xyz',
        store_id: 'store_xyz',
        profile_image_url: 'image.png'
    }

    AddManufactureAPI(manufacture, (data, err) => {
    });
}

let AddBrand = () => {
    const Brand = {
        brand_id: brand_id,
        brand_name: 'SunFest',
        manufacture_id: manufacture_id,
        company_id: company_id,
        store_id: store_id,
        profile_image_url: 'image.png'
    }

    AddBrandAPI(Brand, (data, err) => {
    });
}

let AddProductCategory = () => {
    const ProductCategory = {
        product_category_id: product_category_id,
        product_category_name: 'Food',
        manufacture_id: manufacture_id,
        brand_id: brand_id,
        company_id: company_id,
        store_id: store_id,
        profile_image_url: 'image.png'
    }

    AddProductCategoryAPI(ProductCategory, (data, err) => {
    });
}

let AddProductFamily = () => {
    const product_family = {
        product_family_id: product_family_id,
        product_family_name: 'Biscuit',
        manufacture_id: manufacture_id,
        brand_id: brand_id,
        product_category_id: product_category_id,
        company_id: company_id,
        store_id: store_id,
        profile_image_url: 'image.png'
    }

    AddProductFamilyAPI(product_family, (data, err) => {
    });
}

let AddProduct = () => {
    const Product = {
        product_id: product_id,
        product_name: 'NAVYCUT FT' ,
        description: String,
        product_family_id: product_family_id,
        manufacture_id: manufacture_id,
        brand_id: brand_id,
        product_category_id: product_category_id,
        company_id: company_id,
        store_id: store_id,
        profile_image_url: 'image.png'
    }

    AddProductAPI(Product, (data, err) => {
    });
}

let GetProduct = (product_id) => {    
    GetProductAPI(product_id, (data, err) => {
        console.log(data);
        console.log(err);
    });
}

let ProductLookUp = (product_id) => {    
    ProductLookUpAPI(product_id, (data, err) => {
        console.log(data);
        console.log(err);
    });
}

let AddStore = () => {
    const Store = {
        store_id: store_id,
        store_name: 'store_name',
        store_type: StoreType.Wholesale,
        billing_address: 'Address 1',
        shipping_address: 'Address 2',
        area_id: area_id,
        area_name: 'Mettupatty',
        city_id: city_id,
        city_name: 'Salem',
        state_id: state_id,
        state_name: 'TamilNadu',
        country_id: country_id,
        country_name: 'India',
        pincode : '636111',
        latitude: '0000000',
        longitude: '00000001',
        email: 'mail@mail.com',
        mobilenumber: '1234567890',
        contactperson: 'Human',
        tin: 'TIN123456789',
        gst: 'GST1245679',
        logo: 'image.png',
        banner : 'image1.png',
        business_days_hours : '[mon:{10:00-18:00}]',
        delivery_days_hours : '[Mon,Tue,Wed,Thu,Fri]',
        company_id: company_id
    }

    AddStoreAPI(Store, (data, err) => {

    });
}

let StoreLookUp = () => {    
    StoreLookUpAPI(product_id, (data, err) => {
        console.log(data);
        console.log(err);
    });
}

let GetStore = (store_id) => {    
    GetStoreAPI(store_id, (data, err) => {
        console.log(data);
        console.log(err);
    });
}

let SaveUser = () => {
    const User = {
        user_id: created_by,
        email_id: 'demo@example.com',
        user_name: 'demo@example.com',
        password: 'demo#123',
        first_name: 'Demo',
        last_name: 'Example',
        user_type: UserType.SUPER_ADMIN,
        company_id: company_id,
        store_id: store_id,
        profile_image_url: 'image.png'
    }

    AddUserAPI(User, (data, err) => {
        console.log(data);
        console.log(err);
    });
}

let SignIn = () => {
    IsUserValidAPI('demo@example.com', 'demo#123', (data, err) => {
        console.log(data);
        console.log(err);
    })
}

let RunUnitTest = () => {
    // AddManufacture();
    // AddBrand();
    // AddProductCategory();
    // AddProductFamily();
    // AddProduct();
    let _product_id= 'PR#MGMwZDFkOWEtZGMxZC00NGUzLTg0M2UtNTZlODkyYmE5Mzdl';
    //GetProduct(_product_id);
    //ProductLookUp(null);    
    ProductLookUp(_product_id);
    
    let _store_id= 'ST#YzQwMWYzZGQtZTQ2OS00NjQ2LTg1ZDItZjhlZDA0YjQ4MDBm';
    //AddStore();
    //GetStore(_store_id);
    //StoreLookUp(null);    
    //StoreLookUp(_store_id);
    //SaveUser();
    //SignIn();
};

export { RunUnitTest };
