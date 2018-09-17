const express = require('express')
const path = require('path')
const app = express()
const server = app.listen(8000)
const io = require('socket.io')(server)
// const io = require('socket.io').listen(server) // alternative way of using it

let users = []
let connections = []
// const querystring = require('querystring') // this would be to serialize the data, Not sure if it'll work
app.use(express.json()) // this is a middleware, this would use the middleware to parser through the data? **needs to be tested

app.use(express.static(path.join(__dirname, '/static')))
// app.use(bodyParser.urlencoded({ extended: true })) // not needed; will leave it anyway just in case
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => { // implemented arrow function
  res.render('index')
})

io.on('connection', (socket) => {
  connections.push(socket)
  console.log('Connected: %s socket/s connected', connections.length) // tells us the amount of connections

  // disconnect
  socket.on('disconnect', (data) => {
    connections.splice(connections.indexOf(socket), 1)
    console.log('Disconnected: %s sockets connected', connections.length)
  })

  // send message
  socket.on('sendMessage', (data) => {
    console.log(data)
    io.sockets.emit('newMessage', {msg: data})
  })
})
