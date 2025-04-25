const express = require('express');
const reviewRoute = express.Router();
const { 
    addReview,
    getAllReviews,
    getReview,
    getAllReviewsOfProduct,
    updateReview,
    deleteReview
} = require('../controller/review.controller');

const { userVerifyToken } = require('../helpers/userVerifyToken');

reviewRoute.post('/addReview',userVerifyToken,addReview);
reviewRoute.get('/getAllReviews',userVerifyToken,getAllReviews);
reviewRoute.get('/getReview',userVerifyToken,getReview);
reviewRoute.get('/getAllReviewsOfProduct',getAllReviewsOfProduct);
reviewRoute.put('/updateReview',userVerifyToken,updateReview);
reviewRoute.delete('/deleteReview',userVerifyToken,deleteReview);

module.exports = reviewRoute;