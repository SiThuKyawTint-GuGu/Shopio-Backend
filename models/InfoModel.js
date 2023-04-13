const mongoose = require('mongoose')

const Schema = mongoose.Schema

const InfoSchema = new Schema({
    user_id:{
        type: String,
        required:true,
    },
    location: {
        type: String,
        required:true,
    },
    language: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('info', InfoSchema);





