const{ GetAllCarts, AddCart, UpdateCart, DeleteCart } = require('./../../Core/CartManager');

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

module.exports = { AddCartAPI, UpdateCartAPI, DeleteCartAPI, GetCartsAPI };