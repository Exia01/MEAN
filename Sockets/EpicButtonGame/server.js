const express = require('express')
const path = require('path')
const app = express()
app.use(express.json()) // this is a middleware, this would use the middleware to parser through the data? **needs to be tested

const server = app.listen(8000)
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, '/static')))
// app.use(bodyParser.urlencoded({ extended: true })) // not needed; will leave it anyway just in case
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => { // implemented arrow function
  res.render('index')
})

io.on('connection', (socket) => {
  let count = 0
  socket.on('sendInfo', (data) => {
    console.log(data)
    if (data <= 0) {
      count = 0
    } else {
      count += data
    }
    console.log(count)
    socket.emit('totalCount', {count})
  })
})
