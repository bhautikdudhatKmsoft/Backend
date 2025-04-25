const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },

    cartItem : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'products'
    },

    isDelete : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('cart', cartSchema);