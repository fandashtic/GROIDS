import { IsHasValue, GetNewKey, GetFileExtn, EnCode, DeCode, AddDetaultValues, GetDate } from 'api/Shared/Util';
import { PreFix, UserType, StoreType, ActiveStatus } from 'api/Shared/Constant/Enum';
import { AddManufacture } from 'api/Shared/Master/ManufactureController';
import { AddBrand, DeleteBrand } from 'api/Shared/Master/BrandController';
import { AddProductCategory } from 'api/Shared/Master/ProductCategoryController';
import { AddProductFamily } from 'api/Shared/Master/ProductFamilyController';
import { ProductLookUp, AddProduct, GetProduct } from 'api/Shared/Master/ProductController';
import { IsUserValid, AddUser } from 'api/Shared/Master/UserController';
import { AddStore, UpdateStore, DeleteStore, GetStores, GetStore, StoreLookUp } from 'api/Shared/Master/StoreController';
import { UploadFile, DeleteFile } from 'api/Shared/FileUpload';

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


let _AddManufacture = () => {
    const manufacture = {
        manufacture_id: manufacture_id,
        manufacture_name: 'ITC',
        company_id: 'company_xyz',
        store_id: 'store_xyz',
        profile_image_url: 'image.png'
    }

    AddManufacture(manufacture, (data, err) => {
    });
}

let _AddBrand = () => {
    const Brand = {
        brand_id: brand_id,
        brand_name: 'SunFest',
        manufacture_id: manufacture_id,
        company_id: company_id,
        store_id: store_id,
        profile_image_url: 'image.png'
    }

    AddBrand(Brand, (data, err) => {
    });
}

let _DeleteBrand = (brand_id) => {
    DeleteBrand(brand_id, (data, err) => {
    });
}

let _AddProductCategory = () => {
    const ProductCategory = {
        product_category_id: product_category_id,
        product_category_name: 'Food',
        manufacture_id: manufacture_id,
        brand_id: brand_id,
        company_id: company_id,
        store_id: store_id,
        profile_image_url: 'image.png'
    }

    AddProductCategory(ProductCategory, (data, err) => {
    });
}

let _AddProductFamily = () => {
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

    AddProductFamily(product_family, (data, err) => {
    });
}

let _AddProduct = () => {
    const Product = {
        product_id: product_id,
        product_name: 'NAVYCUT FT',
        description: String,
        product_family_id: product_family_id,
        manufacture_id: manufacture_id,
        brand_id: brand_id,
        product_category_id: product_category_id,
        company_id: company_id,
        store_id: store_id,
        profile_image_url: 'image.png'
    }

    AddProduct(Product, (data, err) => {
    });
}

let _GetProduct = (product_id) => {
    GetProduct(product_id, (data, err) => {
        console.log(data);
        console.log(err);
    });
}

let _ProductLookUp = (product_id) => {
    ProductLookUp(product_id, (data, err) => {
        console.log(data);
        console.log(err);
    });
}

let _AddStore = () => {
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
        pincode: '636111',
        latitude: '0000000',
        longitude: '00000001',
        email: 'mail@mail.com',
        mobilenumber: '1234567890',
        contactperson: 'Human',
        tin: 'TIN123456789',
        gst: 'GST1245679',
        logo: 'image.png',
        banner: 'image1.png',
        business_days_hours: '[mon:{10:00-18:00}]',
        delivery_days_hours: '[Mon,Tue,Wed,Thu,Fri]',
        company_id: company_id
    }

    AddStore(Store, (data, err) => {

    });
}

// let _StoreLookUp = () => {
//     StoreLookUp(product_id, (data, err) => {
//         console.log(data);
//         console.log(err);
//     });
// }

let _GetStore = (store_id) => {
    GetStore(store_id, (data, err) => {
        console.log(data);
        console.log(err);
    });
}

let _SaveUser = () => {
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

    AddUser(User, (data, err) => {
        console.log(data);
        console.log(err);
    });
}

let _SignIn = () => {
    IsUserValid('demo@example.com', 'demo#123', (data, err) => {
        console.log(data);
        console.log(err);
    })
}

let _DeleteFileFromS3 = (filename) => {
    DeleteFile(filename, PreFix.Product, (res) => {
        console.log(res);
    });
}

let RunUnitTest = () => {
    _AddManufacture();
    _AddBrand();
    // let _brand_id= 'BR-N2JhNzU0MzMtODBkNC00ZTlmLTlkOWMtMTAyNWI2ZWNlZDVh';
    // _DeleteBrand(_brand_id);
    _AddProductCategory();
    _AddProductFamily();
    _AddProduct();
    // let _product_id= 'PR#MGMwZDFkOWEtZGMxZC00NGUzLTg0M2UtNTZlODkyYmE5Mzdl';
    // _GetProduct(_product_id);
    _ProductLookUp(null);
    //_ProductLookUp(_product_id);

    //let _store_id= 'ST#YzQwMWYzZGQtZTQ2OS00NjQ2LTg1ZDItZjhlZDA0YjQ4MDBm';
    _AddStore();
    //GetStore(_store_id);
    //_StoreLookUp(null);
    //_StoreLookUp(_store_id);
    _SaveUser();
    _SignIn();
    //let _fileName = 'PR-NGExNjgyZTItN2RjNS00ZGUzLWFjNWQtOGFjMGJkM2MwNDg1.png';
    //_DeleteFileFromS3(_fileName);
};

export { RunUnitTest };
