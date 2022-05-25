const mongoose = require('mongoose')
const userScheme = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    regdate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userScheme)
