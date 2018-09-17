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
  if (!req.session.userName && !req.session.visitCount) {
    req.session.userName = 'Test'
    req.session.visitCount = 1
  } else {
    req.session.visitCount += 1
  }
  // console.log('The request object', req)
  // console.log('The response object', res)
  res.render('index', { count: req.session.visitCount })
})
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/reset', function(req, response){
//   req.session.userName = null;
//   req.session.visitCount = null;
//   console.log(req.session);
//   response.redirect('/');
// });
// app.get('/two', function(req, response){
//   console.log(req.session.visitCount);
//   req.session.visitCount += 1;
//   response.redirect('/');
// });
app.listen(8000, function () {
  console.log('listening on port 8000')
})
