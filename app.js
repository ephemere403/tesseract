const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const authRouter = require('./routes/auth')
const adminRouter = require('./routes/admin')
const articleRouter = require('./routes/articles')
const productRouter = require('./routes/drip')
const app = express()
const passport = require('passport')
const auth = require('./config/userConfig')

//mongodb connection
mongoose.connect('mongodb://localhost/EphemereWeb', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.on('open', () => console.log('Connected MongoDB'))


app.use(require('morgan')('dev'))
//parsing html body
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(passport.initialize())
require('./middleware/Strategy')(passport)

app.use(require('cors')())

//routes
app.use('/auth',authRouter)
app.use('/articles',articleRouter)
app.use('/shop',productRouter)
app.use('/admin',adminRouter)

app.set('view engine', 'ejs')


app.get('/index',auth.forward,(req,res) => {
    res.render("index.ejs")
})

module.exports = app