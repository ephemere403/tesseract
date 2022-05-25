module.exports.getAllproducts = async function (req, res) {
    res.status(200).json({
        product:'all here'
    })
}

module.exports.getProduct = async function (req, res) {
    res.status(200).json({
        product:'im John Lennon drip'
    })
}

module.exports.deleteProduct = async function (req, res) {
    res.status(200).json({
        product:'im dead John Lennons drip '
    })
}
module.exports.postProduct = async function (req, res) {
    res.status(200).json({
        product:'im new-born John Lennon drip'
    })
}
module.exports.updateProduct = async function (req, res) {
    res.status(200).json({
        product:'im John Lennon drip from 1975'
    })
}