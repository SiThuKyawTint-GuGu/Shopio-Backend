const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SportlightSchema = new Schema({
    title1: {
        type: String,
        required:true,
    },
    title2: {
        type: String,
    },
    image: {
        type: String,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('sportlight',SportlightSchema)