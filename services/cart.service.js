const Cart = require('../model/cart.model');

module.exports = class cartServices {

    // add to cart

    async addToCart(body) {
        try {
            return await Cart.create(body);
        } catch (error) {
            console.log(error);
            return error.message
        }
    };

    // get cart 

    async getCart(body) {
        try {
            return await Cart.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // get cart by id 

    async getCartById(id) {
        try {
            return await Cart.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // get all carts

    async getAllCarts(body) {
        try {
            return await Cart.find(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // update cart 

    async updateCart(id,body) {
        try {
            return await Cart.findByIdAndUpdate(id,{$set : body},{new : true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // delete cart 

    async deleteCart(id) {
        try {
            return await Cart.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}