const mainRoute = require('express').Router();
const userRoute = require('./user.routes');
const productRoute = require('./product.routes');
const orderRoute = require('./order.routes');
const cartRoute = require('./cart.routes');
const reviewRoute = require('./review.routes');

mainRoute.use('/user',userRoute);
mainRoute.use('/product',productRoute);
mainRoute.use('/order',orderRoute);
mainRoute.use('/cart',cartRoute);
mainRoute.use('/review',reviewRoute);

module.exports = mainRoute;