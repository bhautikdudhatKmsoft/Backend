const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },

    item : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'products'
    },

    quatity : {
        type : Number,
        default : 1
    },

    isDelete : {
        type : Boolean,
        default : false
    }
},{
    versionKey : false,
    timestamps : true
});

module.exports = mongoose.model('order', orderSchema);