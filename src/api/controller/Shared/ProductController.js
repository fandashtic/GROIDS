import { GetAllProducts, AddProduct, UpdateProduct, DeleteProduct } from 'api/Core/ProductManager';

let AddProductAPI = async (product, callback) => {
    return await AddProduct(product, callback);
};

let UpdateProductAPI = async (productId, product, callback) => {
    return await UpdateProduct(productId, product, callback);
};

let DeleteProductAPI = async (productId, callback) => {
    return await DeleteProduct(productId, callback);
};

let GetProductsAPI = async (filter, callback) => {
    return await GetAllProducts(filter, callback);
};

export { AddProductAPI, UpdateProductAPI, DeleteProductAPI, GetProductsAPI };