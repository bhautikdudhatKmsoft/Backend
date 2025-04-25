const Product = require('../model/product.model');

module.exports = class userServices {

    // add product 

    async addProduct(body) {
        try {
            return await Product.create(body);
        } catch (error) {
            console.log(error);
            return error.message
        }
    };

    // get product 

    async getProduct(body) {
        try {
            return await Product.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // get all product 

    async getAllProducts(body) {
        try {
            return await Product.find(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // get product by id 

    async getProductById(id) {
        try {
            return await Product.findById(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // update product 

    async updateProduct(id,body) {
        try {
            return await Product.findByIdAndUpdate(id,{$set : body},{new : true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // delete product 

    async deleteProduct(id) {
        try {
            return await Product.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}