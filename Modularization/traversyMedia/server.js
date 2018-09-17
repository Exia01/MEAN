const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('express-flash')
const mongoose = require('mongoose')
let Schema = mongoose.Schema

app.use(flash())
app.use(session({
  secret: 'shhh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(bodyParser.urlencoded({ extended: true }))
let path = require('path')
app.use(express.static(path.join(__dirname, './static')))
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
// this is for the needed views components

mongoose.connect('mongodb://localhost/Dashboard')

let CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  text: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  message: { type: Schema.Types.ObjectId, ref: 'Message' }
})

let MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  text: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

mongoose.Promise = global.Promise // this is creating the guidelines.

mongoose.model('Message', MessageSchema)
mongoose.model('Comment', CommentSchema)
let Message = mongoose.model('Message')
let Comment = mongoose.model('Comment')

app.get('/', (req, res) => {
  Message.find({}).populate('comments').exec((err, i) => {
    if (err) {
      console.log('Error: ', err)
      console.log(i)
      req.flash('MESSAGE')
      return res.redirect('/')
    } else {
      res.render('dashboard', {i: i})
    }
  })
})

// app.get('/Dashboard', (req, res) => {
//   Dashboard.find({}, (err, x) => {
//     console.log(x)
//     if (err) {
//       console.log('Error: ', err)
//       return res.redirect('/')
//     } else {
//       res.render('mongooses', {mongoose: x})
//     }
//   })
// })

app.post('/newMessage', (req, res) => {
  let message = new Message(req.body)
  console.log(message)
  message.save(err => {
    if (err) {
      for (let key in err.errors) {
        req.flash('message', err.errors[key].message)
      }
      return res.redirect('/')
    } else {
      return res.redirect('/')
    }
  })
})

app.post('/newComment', (req, res) => {
  let comment = new Comment(req.body)
  console.log(comment)
  mongoose.save((err) => {
    if (err) {
      for (let key in err.errors) {
        req.flash('comment', err.errors[key].message)
      }
      return res.redirect('/')
    } else {
      Message.findById(comment.message, (err, message) => {
        if (err) {
          console.log('Uh oh we have an error!', err)
        } else {
          message.comments.push(comment.id)
          message.save((err) => {
            if (err) {
              console.log('Uh oh we have an error!', err)
            } else {
              res.redirect('/')
            }
          })
        }
      })
    }
  })
})

app.get('/delete/:id', (req, res) => {
  Message.remove({_id: req.params.id}, (err) => {
    if (err) {
      console(err)
      return res.render('/', {'errors': err.errors})
    } else {
      return res.redirect('/')
    }
  })
})

// app.post('/processedit/:id', (req, res) => {
//   Mongoose.findOneAndUpdate({_id: req.params.id}, req.body, function (err, mongoose) {
//   if (err) {
//     return res.redirect('/edit', {'errors': Mongoose.errors})
//   } else {
//     return res.redirect('/mongooses')
//   }
// })
// })

// app.get('/edit/:id', (req, res) => {
//   Mongoose.find({_id: req.params.id}, (err, mongoose) => {
//     console.log(req.param.id)
//     if (err) {
//       // console.log('Error: ', err)
//       return res.redirect('/edit')
//     } else {
//       console.log(mongoose)
//       res.render('edit', x = mongoose[0])
//     }
//   })
// })

app.listen(8000, () => {
  console.log('listening on port 8000')
})
