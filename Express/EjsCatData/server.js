let express = require('express')

let app = express()

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.set('view engine', 'ejs')

var dogs = [
  {
    name: 'Diamond',
    age: '4',
    favorite_food: 'Bluberries',
    img: 'Diamond.jpg'
  },
  { name: 'Lincoln', age: '1', favorite_food: 'Ice Cream', img: 'Lincoln.jpg' },
  { name: 'Rocket', age: '10 Weeks', favorite_food: 'Milk', img: 'Rocket.jpg' },
  { name: 'Tuki', age: '6 Weeks', favorite_food: 'Everything', img: 'Tuki.jpg' }
]

app.get('/details', function (req, res) {
  res.render('details')
})
app.get('/', function (req, res) {
  res.render('cats', { dogs: dogs })
})

app.listen(8000, function () {
  console.log('listening on port 8000')
})
