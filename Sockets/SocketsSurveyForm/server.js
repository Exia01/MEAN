const express = require('express')
const path = require('path')
const app = express()

// const querystring = require('querystring') // this would be to serialize the data, Not sure if it'll work
app.use(express.json()) // this is a middleware, this would use the middleware to parser through the data? **needs to be tested

const server = app.listen(8000)
const io = require('socket.io')(server)
// const io = require('socket.io').listen(server) // alternative way of using it

app.use(express.static(path.join(__dirname, '/static')))
// app.use(bodyParser.urlencoded({ extended: true })) // not needed; will leave it anyway just in case
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => { // implemented arrow function
  res.render('index')
})

io.on('connection', (socket) => {
  let rnumber = Math.trunc(Math.random() * 1000) // give the random number.
  let s = 'You emitted the following information to the server:'
  let x = 'Your lucky number emitted by the server is ' + rnumber
  socket.on('formSubmit', (data) => {
    console.log(data)
    socket.emit('updatedMessage', {msg: s + ' ' + JSON.stringify(data)}) // the json eliminates the "object object" response
    socket.emit('luckyNum', { msg: x }) // unable to send multiple messages in one emit.
  })
})
