const express = require('express')

const session = require('express-session')

const app = express()

app.use(express.static(__dirname + '/static'))

app.use(session({
  secret: 'shhh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set('views', __dirname + '/views')

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})


var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/info', function (req, res) {
  survey = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    comments: req.body.comments
  }
  console.log(survey)
  res.render('result', {survey})
})

app.listen(8000, function () {
  console.log('listening on port 8000')
})

