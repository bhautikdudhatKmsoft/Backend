const Order = require('../model/order.model');

module.exports = class orderServices {

    // add order 

    async addOrder(body) {
        try {
            return await Order.create(body);
        } catch (error) {
            console.log(error);
            return error.message
        }
    };

    // get order 

    async getOrder(body) {
        try {
            return await Order.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message
        }
    };

    // get order by id 

    async getOrderById(id) {
        try {
            return await Order.findById(id);
        } catch (error) {
            console.log(error);
            return error.message
        }
    };
    
    // get all orders 

    async getAllOrders(body) {
        try {
            return await Order.find(body);
        } catch (error) {
            console.log(error);
            return error.message
        }
    };

    // update order 

    async updateOrder(id,body) {
        try {
            return await Order.findByIdAndUpdate(id,{$set : body},{new : true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // delete order

    async deleteOrder(id) {
        try {
            return await Order.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}