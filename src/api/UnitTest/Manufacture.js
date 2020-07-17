import { v4 as uuidv4 } from 'uuid';

import { AddManufactureAPI } from 'api/Controller/Shared/ManufactureController';
import { AddBrandAPI } from 'api/Controller/Shared/BrandController';
import { AddProductCategoryAPI } from 'api/Controller/Shared/ProductCategoryController';
import { AddProductFamilyAPI } from 'api/Controller/Shared/ProductFamilyController';

const company_id = uuidv4();
const manufacture_id = uuidv4();
const brand_id = uuidv4();
const product_category_id = uuidv4();
const product_family_id = uuidv4();
const store_id = uuidv4();
const created_by = uuidv4();

let AddManufacture = () =>{
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
        console.log(data);
        console.log(err);
    });
}

let AddBrand = () =>{
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
        console.log(data);
        console.log(err);
    });
}

let AddProductCategory = () =>{
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
        console.log(data);
        console.log(err);
    });
}

let AddProductFamily = () =>{
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
        console.log(data);
        console.log(err);
    });
}

let RunUnitTest = () => {
    //AddManufacture();
    // AddBrand();
    // AddProductCategory();
    // AddProductFamily();
};

export { RunUnitTest };
