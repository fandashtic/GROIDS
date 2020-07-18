import { GetNewKey, AddDetaultValues } from 'api/Shared/Util';
import { PreFix, UserType } from 'api/Shared/Constant/Enum';
import { AddManufactureAPI } from 'api/Controller/Shared/ManufactureController';
import { AddBrandAPI } from 'api/Controller/Shared/BrandController';
import { AddProductCategoryAPI } from 'api/Controller/Shared/ProductCategoryController';
import { AddProductFamilyAPI } from 'api/Controller/Shared/ProductFamilyController';
import { ProductLookUpAPI, AddProductAPI } from 'api/Controller/Shared/ProductController';
import { IsUserValidAPI, AddUserAPI } from 'api/Controller/Shared/UserController';

const company_id = GetNewKey(PreFix.Company);
const manufacture_id = GetNewKey(PreFix.Manufacture);
const brand_id = GetNewKey(PreFix.Brand);
const product_category_id = GetNewKey(PreFix.ProductCategory);
const product_family_id = GetNewKey(PreFix.ProductFamily);
const store_id = GetNewKey(PreFix.Store);
const product_id = GetNewKey(PreFix.Product);
const created_by = GetNewKey(PreFix.User);

let AddManufacture = () => {
    const manufacture = {
        manufacture_id: manufacture_id,
        manufacture_name: 'ITC',
        company_id: 'company_xyz',
        store_id: 'store_xyz',
        profile_image_url: 'image.png',
        status: true,
        created_on: new Date(),
        created_by: 'demouser',
        modified_on: null,
        modified_by: null
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
        profile_image_url: 'image.png',
        status: true,
        created_on: new Date(),
        created_by: created_by,
        modified_on: null,
        modified_by: null
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
        profile_image_url: 'image.png',
        status: true,
        created_on: new Date(),
        created_by: created_by,
        modified_on: null,
        modified_by: null
    }

    AddProductCategoryAPI(ProductCategory, (data, err) => {
    });
}

let AddProductFamily = () => {
    const Productfamily = {
        product_family_id: product_family_id,
        product_family_name: 'Biscuit',
        manufacture_id: manufacture_id,
        brand_id: brand_id,
        product_category_id: product_category_id,
        company_id: company_id,
        store_id: store_id,
        profile_image_url: 'image.png',
        status: true,
        created_on: new Date(),
        created_by: 'demouser',
        modified_on: null,
        modified_by: null
    }

    AddProductFamilyAPI(Productfamily, (data, err) => {
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
        profile_image_url: 'image.png',
        status: true,
        created_on: new Date(),
        created_by: 'demouser',
        modified_on: null,
        modified_by: null
    }

    AddProductAPI(Product, (data, err) => {
    });
}

let ProductLookUp = () => {
    ProductLookUpAPI('PR#OGI0YTRkMzgtMDQ1ZC00OGQ5LWEyYjUtMTY5NWVlOWUzOGI3', (data, err) => {
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
        profile_image_url: 'image.png',
        status: true,
        created_on: new Date(),
        created_by: created_by,
        modified_on: null,
        modified_by: null
    }

    AddUserAPI(User, (data, err) => {

    });
}

let SignIn = () => {
    IsUserValidAPI('demo@example.com', 'demo#123', (data, err) => {

    })
}

let RunUnitTest = () => {
    AddManufacture();
    AddBrand();
    AddProductCategory();
    AddProductFamily();
    AddProduct();
    ProductLookUp();
    SaveUser();
    SignIn();
};

export { RunUnitTest };
