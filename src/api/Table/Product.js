let Product = {
    product_id: String,
    product_name: String,
    manufacture_id: String,
    brand_id: String,
    product_category_id: String,
    product_family_id: String,
    description: String,
    company_id: String,
    store_id: String,
    profile_image_url: String,
    status: Boolean,
    created_on: Date,
    created_by: String,
    modified_on: Date,
    modified_by: String
}

let Product_Lookup = {
    product_id: String,
    product_name: String,
    manufacture_id: String,
    brand_id: String,
    product_category_id: String,
    product_family_id: String,
    company_id: String,
    store_id: String,
    manufactures: [{ dispalyName: '', value: '', isSelected: true }, { dispalyName: '', value: '', isSelected: false }],
    brands: [{ dispalyName: '', value: '', isSelected: true }, { dispalyName: '', value: '', isSelected: false }],
    product_categories: [{ dispalyName: '', value: '', isSelected: true }, { dispalyName: '', value: '', isSelected: false }],
    product_families: [{ dispalyName: '', value: '', isSelected: true }, { dispalyName: '', value: '', isSelected: false }],
    description: String,
    company: [{ dispalyName: '', value: '', isSelected: true }, { dispalyName: '', value: '', isSelected: false }],
    store: [{ dispalyName: '', value: '', isSelected: true }, { dispalyName: '', value: '', isSelected: false }],
    profile_image_url: String,
    status: Boolean
}

export { Product, Product_Lookup };