const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

    product : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },

    rating : {
        type : Number,
        required : true
    },

    review : {
        type : String,
        required : true
    },

    isDelete : {
        type : Boolean,
        default : false
    },

    createAt : {
        type : Date,
        default : Date.now
    },

    updateAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('review', reviewSchema);