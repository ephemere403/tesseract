const jwt = require('jsonwebtoken')
const {secretKey} = require("../config/keys");
const {toString} = require("validator");

module.exports.authCheck = async function (req,res,next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                message: 'you are not logged in'
            })
        }
        const decodedData = jwt.verify(token, secretKey)
        req.user = decodedData
        next()
    } catch (e) {
        console.log(e)
        return res.status(403).redirect('/index')
    }
}