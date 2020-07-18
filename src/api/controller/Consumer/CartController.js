import { GetAllCarts, AddCart, UpdateCart, DeleteCart } from 'api/Core/CartManager';

let AddCartAPI = async (cart, callback) => {
    return await AddCart(cart, callback);
};

let UpdateCartAPI = async (cartId, cart, callback) => {
    return await UpdateCart(cartId, cart, callback);
};

let DeleteCartAPI = async (cartId, callback) => {
    return await DeleteCart(cartId, callback);
};

let GetCartsAPI = async (filter, callback) => {
    return await GetAllCarts(filter, callback);
};

export { AddCartAPI, UpdateCartAPI, DeleteCartAPI, GetCartsAPI };