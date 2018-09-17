const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const bcrypt = require('bcrypt')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
app.use(flash())
app.use(session({
  secret: 'codingmojo',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
mongoose.connect('mongodb://localhost/User')

let UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  lname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  dob: {
    type: Date,
    required: true
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  }
})

mongoose.Promise = global.Promise // this is creating the guidelines.

mongoose.model('User', UserSchema)
let User = mongoose.model('User')

// ROUTE TO MAIN PAGE
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/dashboard', (req, res) => {
  if (!req.session.userid) {
    req.flash('Please log in.')
    return res.redirect('/')
  } else {
    User.findOne({ _id: req.session.userid }, (err, user) => {
      console.log('We have an error.' + err)
      res.render('dashboard', { user: user })
    })
  }
})

// ROUTE TO GET DATA FROM FORM
app.get('/', (req, res) => {
  User.find({}, (err, x) => {
    console.log(x)
    if (err) {
      console.log('Error: ', err)
      return res.redirect('/')
    } else {
      res.render('index', { user: x })
    }
  })
})

// ROUTE TO RENDER DATA ONTO PAGE
app.post('/', (req, res) => {
  let user = new User(req.body)
  console.log(user)
  user.save(err => {
    if (err) {
      console.log('We have an error!', err)
      return res.redirect('/', { 'errors': user.errors })
    } else {
      return res.redirect('/')
    }
  })
})

app.post('/register', function (req, res) {
  User.findOne({ email: req.body.email }), (err, user) => {
    if (user) {
      res.flash('The email ' + req.body.email + ' already exists!')
      return res.direct('/register')
    } else {
      let user = new User(req.body)
      bcrypt.hash(user.password, 8, function (err, hash) {
        if (err) {
          res.flash("Your salt level is over 9000, can't help you", err)
          return res.redirect('/register')
        } else {
          user.password = hash
          user.save(errs => {
            if (errs) {
              for (let err of errs) res.flash(err)
              return res.redirect('/register')
            } else {
              req.session.userId = user._id
              res.flash('Welcome, ' + user.fname)
              return res.redirect('/login')
            }
          })
        }
      })
    }
  }
})

app.post('/login', function (req, res) {
  User.findOne({ email: req.body.email }, (errs, user) => {
    if (user) {
      bcrypt.compare(req.body.password, user.password, function (err, res) {
        if (err) {
          res.flash('Invalid login credentials.')
          return res.redirect('/')
        } else {
          req.session.userid = user._id
          req.flash('Hello ' + user.fname)
          return res.redirect('/dashboard')
        }
      })
    } else {
      req.flash('Email does not exist, please register.')
      return res.redirect('/')
    }
  })
})
app.listen(1991, () => {
  console.log('Listening on 1991')
})
