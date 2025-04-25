const express = require('express');
const cartRoute = express.Router();
const {
    addToCart,
    getAlllCarts,
    getCart,
    updateCart,
    deleteCart,
    getAllCartsOfUser
} = require('../controller/cart.controller');
const { userVerifyToken } = require('../helpers/userVerifyToken');

cartRoute.post('/addCart', userVerifyToken,addToCart);
cartRoute.get('/getAllCarts',userVerifyToken,getAlllCarts);
cartRoute.get('/getCart',userVerifyToken,getCart);
cartRoute.put('/updateCart',userVerifyToken,updateCart);
cartRoute.delete('/delete',userVerifyToken,deleteCart);
cartRoute.get('/getCartsOfuser', userVerifyToken, getAllCartsOfUser);

module.exports = cartRoute