const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({

    idCustomer:{
        type:String,
        required:true
    },
    idDish:{
        type:String,
        required:true
    },
    orderDate : {
        type: Date,
        required: true
    },
    orderTime : {
        type: Date,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    totalPrice : {
        type: Number,
        required: true
    }
})

module.exports = order = mongoose.model('order', orderSchema)