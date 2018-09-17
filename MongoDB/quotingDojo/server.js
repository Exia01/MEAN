let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
app.use(flash())
app.use(session({
  secret: 'codingmojo',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(bodyParser.urlencoded({ extended: true }))
let path = require('path')

app.use(express.static(path.join(__dirname, './static')))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/Quote')

let QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
},
{ timestamps: true })
mongoose.Promise = global.Promise // this is creating the guidelines.

mongoose.model('Quote', QuoteSchema)
let Quote = mongoose.model('Quote')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/quotes', (req, res) => {
  Quote.find({}, (err, x) => {
    console.log(x)
    if (err) {
      console.log('Error: ', err)
      return res.redirect('/')
    } else {
      res.render('quotes', {quote: x.reverse()})
    }
  })
})

app.post('/newquote', (req, res) => {
  let quote = new Quote(req.body)
  console.log(quote)
  quote.save(err => {
    if (err) {
      console.log('We have an error!', err)
      return res.redirect('/', {'errors': quote.errors})
    } else {
      return res.redirect('/quotes')
    }
  })
})

// app.post('/newquote', function (req, res) {
//   let quote = new Quote({ name: req.body.name, quote: req.body.quote })
//   console.log(quote)
//   quote.save(function (err) {
//     if (err) {
//       console.log('Something went wrong:\n' + err)
//     } else {
//       console.log('Quote successfully added.')
//       res.redirect('/quotes')
//     }
//   })
//   x = Quote.find({})
//   console.log(x)
// })
app.get('/deletequote', (req, res) => {
  Quote.remove({_id: req.params.id}, (err) => {
    if (err) {
      return res.render('/quotes', {'errors': Quote.errors})
    } else {
      return res.render('/quotes')
    }
  })
})

app.listen(8000, () => {
  console.log('listening on port 8000')
})
