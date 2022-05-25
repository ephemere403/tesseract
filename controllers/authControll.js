const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {secretKey} = require('../config/keys')

function CheckPassword(input) {
    let pass =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    return !!input.match(pass);
}

module.exports.login = async function (req, res) {
    const candidate = await User.findOne({email:req.body.email})

    if(candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if(passwordResult){
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, secretKey, {expiresIn: 60*60})

            return res.status(200).render('users', {'token':'Bearer '+token})
        }else{
            return  res.status(401).json({
                message:'incorrect password >:('
            })

        }
    } else{
        return res.status(404).json({
            message:'this email is not registered'
        })
    }
}

module.exports.register = async function (req, res) {
    const candidate = await User.findOne({email:req.body.email})

    if(!CheckPassword(req.body.password)){
        return res.json({
            message:'password should contain capital & small letters, digits, and special signs'
        })
    }else{
        if(candidate) {
            return res.status(409).json({
                message:'this email already exists'
            })
        } else{
            const salt = bcrypt.genSaltSync(4)
            const password = req.body.password
            const user = new User({
                email: req.body.email,
                password: bcrypt.hashSync(password,salt),
                date: req.body.regdate
            })

            try{
                await user.save()
                return res.status(201).render('login', {
                    email: req.user
                })

            }catch{
                return res.status(400)

            }
        }
    }

}

module.exports.getUsers = async function (req,res) {
    try {
        const users = await User.find()
        return res.render('users',{"mentlegen":User})
    } catch (e) {
        console.log(e)
    }

}
