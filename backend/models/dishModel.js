const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dishSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    }
})

module.exports = dish = mongoose.model('dish', dishSchema)