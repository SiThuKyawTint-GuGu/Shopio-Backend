const mongoose = require('mongoose');

const Schema = mongoose.Schema

const RecommandSchema = new Schema({
    title: {
        type: String,
    },
    pricedollar: {
        type: Number,
    },
    pricecent: {
        type: Number,
        required:true,
    },
    image: {
        type:String,
        required:true,
    }
}, { timestamps: true })

module.exports = mongoose.model('recommand', RecommandSchema)