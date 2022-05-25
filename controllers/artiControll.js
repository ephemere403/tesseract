const Article = require('../models/article')
const authenticate = require('../middleware/verifyToken')


module.exports.getAllArticles = async function (req, res) {

}

module.exports.getArticle = async function (req, res) {
    res.status(200).json({
        article:'im John Lennon'
    })
}

module.exports.deleteArticle = async function (req, res) {
    res.status(200).json({
        article:'im dead John Lennon'
    })
}
module.exports.postArticle = async function (req, res) {
    res.status(200).json({
        article:'im new-born John Lennon'
    })
}
module.exports.updateArticle = async function (req, res) {
    res.status(200).json({
        article:'im John Lennon from 1975'
    })
}