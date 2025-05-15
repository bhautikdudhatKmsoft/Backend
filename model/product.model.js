const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        unique : true
    },

    price : {
        type : Number,
        required : true
    },

    description : {
        type : String
    },

    image : {
        type : String,
        required : true
    },

    sideImages : {
        type : [String],
        default : []
    },

    isDelete : {
        type : Boolean,
        default : false
    }

});

module.exports = mongoose.model('products', productSchema);