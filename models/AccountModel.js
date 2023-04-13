const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AccountSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model('account', AccountSchema);