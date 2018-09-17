let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
let path = require('path')

app.use(express.static(path.join(__dirname, './static')))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/NAmeGoesHere')

let User = new mongoose.Schema({
  name: String,
  age: Number}) // this is creating the guidelines.

mongoose.model('User', User) // We are setting this Schema in our Models as 'User'
let users = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

app.get('/', (req, res) => {
  console.log(req)
  users.find({}, (err, users) => {
    if (err) {
      console.log('something went wrong', {'errors': users.erros})
    } else {
      console.log('successfully added a user!')
      res.redirect('/')
    }
  })
})

app.get('/register', (req, res) => {
  console.log(req)
  console.log('POST DATA', req.body)

  let user = new User(req.body)
  user.save((err) => {
    if (err) {
      console.log('something went wrong', {'errors': user.erros})
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!')
      res.redirect('/')
    }
  })
})

// to update User.Update({_id:req.param.id}, {$set:{name:'bob'}})
// function(err){
// if(err) {
//     console.log('something went wrong', {'errors': user.erros});
//   } else { // else console.log that we did well and then redirect to the root route
//     console.log('successfully updated a user!')
//     res.redirect('/')
//   }
// }
// to update User.remove({_id:req.param.id}, {$set:{name:'bob'}})
// function(err){
// if(err) {
//     console.log('something went wrong', {'errors': user.erros});
//   } else { // else console.log that we did well and then redirect to the root route
//     console.log('successfully remove a user!')
//     res.redirect('/')
//   }
// }
// param comes from the url, body is from the url.
// Routes
// Root Request

app.post('/users', (req, res) => {
  console.log('POST DATA', req.body)
  res.redirect('/')
})

app.listen(8000, () => {
  console.log('listening on port 8000')
})
