
var { GetAllCarts, AddCart, UpdateCart, DeleteCart } = require('./../Core/CartManager');

exports.AddCart = async (cart, callback) => {
    return await AddCart(cart, callback);
};

exports.UpdateCart = async (cartId, cart, callback) => {
    return await UpdateCart(cartId, cart, callback);
};

exports.DeleteCart = async (cartId, callback) => {
    return await DeleteCart(cartId, callback);
};

exports.GetCarts = async (filter, callback) => {
    return await GetAllCarts( filter, callback);
};