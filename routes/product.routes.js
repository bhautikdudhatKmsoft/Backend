const express = require('express');
const productRoutes = express.Router();
const { 
    addProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct 
} = require('../controller/product.controller');
const upload = require('../helpers/imageUpload');

const { userVerifyToken } = require('../helpers/userVerifyToken')

productRoutes.post('/add',userVerifyToken,upload,addProduct);
productRoutes.get('/get-all',userVerifyToken,getAllProduct);
productRoutes.get('/get',userVerifyToken,getProduct);
productRoutes.put('/update',userVerifyToken,updateProduct);
productRoutes.delete('/delete',userVerifyToken,deleteProduct);

module.exports = productRoutes