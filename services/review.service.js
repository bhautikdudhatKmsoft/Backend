const Review = require('../model/review.model');

module.exports = class reviewServises {
    
    // add review 

    async addReview(body) {
        try {
            return await Review.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // get review 

    async getReview(body) {
        try {
            return await Review.findOne(body);
        } catch (error) {
            console.log(error);
            return error.message
        }
    };

    // get review by id 

    async getReviewById(id) {
        try {
            return await Review.findById(id);
        } catch (error) {
            console.log(error);
            return error.message
        }
    };

    // get all review 

    async getAllReview(body) {
        try {
            return await Review.find(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // update review 

    async updateReview(id,body) {
        try {
            return await Review.findByIdAndUpdate(id,{$set : body}, {new : true});
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // delet review 

    async deleteReview(id) {
        try {
            return await Review.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    }
}