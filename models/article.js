const mongoose = require('mongoose')
const articleScheme = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    text:{
        type: String

    },
    postdate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Article', articleScheme)
