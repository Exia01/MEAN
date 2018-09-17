const express = require('express')
const session = require('express-session')
const flash = require('express-flash')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const path = require('path')
const app = express()

app.use(
  session({
    secret: 'shhh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
)

app.use(express.json())
app.use(flash())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

require('./config/Mongoose.js')
require('./config/Routes.js')(app)

app.listen(8000, () => {
  console.log('Listening on: ', 8000)
})
