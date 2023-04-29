const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FooterSchema = new Schema({
    title: {
        type: String,
        required:true,
    }
}, { timestamps: true })

module.exports = mongoose.model('footer',FooterSchema)