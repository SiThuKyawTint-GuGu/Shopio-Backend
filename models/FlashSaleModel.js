const mongoose = require('mongoose');

const Schema = mongoose.Schema

const FlashSaleSchema = new Schema({
    percentage: {
        type: String,
        required:true,
    },
     normalprice: {
        type: String,
        required: true,
    },
    discountprice: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required:true,
    },
    image: {
        type: String,
        required:true,
    }
}, { timestamps: true })

module.exports = mongoose.model('flashsale',FlashSaleSchema)