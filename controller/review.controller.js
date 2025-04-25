const ReviewServices = require('../services/review.service');
const reviewServices = new ReviewServices();
const UserServices = require('../services/user.service');
const userServices = new UserServices();
const ProductServices = require('../services/product.service');
const productServices = new ProductServices();

exports.addReview = async(req,res) => {
    try {
        let user = await userServices.getUserById(req.body.user);

        if(!user) {
            return res.status(404).json({message : `User is not found.......`});
        }

        let product = await productServices.getProductById(req.body.product);


        if(!product) {
            return res.status(404).json({message : `Product is not found.........`});
        }

        let review = await reviewServices.getReview(req.body);

        if(review) {
            return res.status(400).json({message : `Review is already found`});
        }

        review = await reviewServices.addReview(req.body);

        res.status(201).json({review,message : `Review added successfully.......`});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error..............${console.error()}`});
    }
};

exports.getAllReviews = async(req,res) => {
    try {
        let reviews = await reviewServices.getAllReview({isDelete : false});

        if(!reviews) {
            return res.status(404).json({message : `Review is not found........`});
        }

        res.status(200).json(reviews);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.........${console.error()}`});
    }
}

exports.getReview = async(req,res) => {
    try {
        let review = await reviewServices.getReviewById(req.query.reviewId);

        if(!review) {
            return res.status(404).json({message : `Review is not found.....`});
        }

        res.status(200).json(review);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error......${console.error()}`});
    }
};

exports.getAllReviewsOfProduct = async(req,res) => {
    try {
        let productId = await productServices.getProductById(req.query.productId);

        if(!productId) {
            return res.status(404).json({message : `Product is not found..........`});
        }

        let reviews = await reviewServices.getAllReview({product : productId});

        if(!reviews) {
            return res.status(404).json({message : `Review is not found.......`});
        }

        res.status(200).json({reviews,message : `${productId.name}'s all review found successfully..........`});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.....${console.error()}`});
    }
}

exports.updateReview = async(req,res) => {
    try {
        let review = await reviewServices.getReviewById(req.query.reviewId);

        if(!review) {
            return res.status(404).json({message : `Review is not found........`});
        }

        review = await  reviewServices.updateReview(review._id,{...req.body});

        res.status(201).json({message : `Review update successfully......`,review});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Inrternal server error.......${console.error()}`});
    }
};

exports.deleteReview = async(req,res) => {
    try {
        let review = await reviewServices.getReviewById(req.query.reviewId);

        if(!review) {
            return res.status(404).json({message : `Review is not found.........`});
        }

        review = await reviewServices.deleteReview(review._id);

        res.status(200).json({review,message : `review delete successfully.............`});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error........${console.error()}`});
    }
}