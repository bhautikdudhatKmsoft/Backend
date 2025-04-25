const express = require('express');
const orderRoute = express.Router();
const { 
    addOrder,
    getAllOrder,
    getOrder,
    updateOrder,
    deleteOrder,
    getOrdersOfUser
 } = require('../controller/order.controller');
const { userVerifyToken } = require('../helpers/userVerifyToken');

orderRoute.post('/add-order', userVerifyToken, addOrder);
orderRoute.get('/getAllOrder', userVerifyToken, getAllOrder);
orderRoute.get('/getOrder', userVerifyToken, getOrder);
orderRoute.put('/updateOrder', userVerifyToken, updateOrder);
orderRoute.delete('/deleteOrder', userVerifyToken, deleteOrder);
orderRoute.get('/getAllOrdersOfUser', userVerifyToken, getOrdersOfUser);

module.exports = orderRoute